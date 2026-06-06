import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Número oficial de contato da Geandra Quirino.
// Formato esperado: 55 (Brasil) + 22 (DDD) + 997246499
const EXPECTED_PHONE = "5522997246499";
const EXPECTED_DISPLAY = "(22) 99724-6499";

// Arquivos cujos links de contato NÃO pertencem à Geandra
// (ex.: crédito do desenvolvedor). Mantenha esta lista mínima.
const ALLOWLIST = new Set<string>(["src/components/CreditBar.tsx"]);

const SRC_DIR = join(process.cwd(), "src");

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(t|j)sx?$/.test(entry)) out.push(full);
  }
  return out;
}

const files = walk(SRC_DIR);

// Captura href / strings contendo wa.me/<digits> ou tel:<digits>
const WA_REGEX = /wa\.me\/(\+?\d{6,})/g;
const TEL_REGEX = /tel:(\+?\d{6,})/g;
// Captura exibições humanas tipo (22) 99724-6499 ou variações de DDD
const DISPLAY_REGEX = /\((\d{2})\)\s?9?\d{4}-\d{4}/g;

type Finding = { file: string; match: string; digits: string };

function normalize(digits: string): string {
  return digits.replace(/^\+/, "");
}

describe("Validação dos links de contato (WhatsApp / Telefone)", () => {
  const waFindings: Finding[] = [];
  const telFindings: Finding[] = [];
  const displayFindings: Finding[] = [];

  for (const file of files) {
    const rel = relative(process.cwd(), file).replace(/\\/g, "/");
    if (ALLOWLIST.has(rel)) continue;
    const content = readFileSync(file, "utf8");

    for (const m of content.matchAll(WA_REGEX)) {
      waFindings.push({ file: rel, match: m[0], digits: normalize(m[1]) });
    }
    for (const m of content.matchAll(TEL_REGEX)) {
      telFindings.push({ file: rel, match: m[0], digits: normalize(m[1]) });
    }
    for (const m of content.matchAll(DISPLAY_REGEX)) {
      const idx = m.index ?? 0;
      const before = content.slice(Math.max(0, idx - 40), idx);
      // Ignora placeholders de input (ex.: campo onde o usuário digita o telefone dele).
      if (/placeholder\s*=\s*["'`]$/.test(before)) continue;
      displayFindings.push({ file: rel, match: m[0], digits: m[1] });
    }
  }

  it("possui ao menos um link wa.me no projeto", () => {
    expect(waFindings.length).toBeGreaterThan(0);
  });

  it("todos os links wa.me usam 5522997246499", () => {
    const invalid = waFindings.filter((f) => f.digits !== EXPECTED_PHONE);
    expect(
      invalid,
      `Links wa.me inválidos encontrados:\n${invalid
        .map((f) => `  - ${f.file}: ${f.match}`)
        .join("\n")}\nEsperado: wa.me/${EXPECTED_PHONE}`,
    ).toEqual([]);
  });

  it("todos os links tel: usam +5522997246499", () => {
    const invalid = telFindings.filter((f) => f.digits !== EXPECTED_PHONE);
    expect(
      invalid,
      `Links tel: inválidos encontrados:\n${invalid
        .map((f) => `  - ${f.file}: ${f.match}`)
        .join("\n")}\nEsperado: tel:+${EXPECTED_PHONE}`,
    ).toEqual([]);
  });

  it("todos os números exibidos usam DDD 22 e final 99724-6499", () => {
    const invalid = displayFindings.filter(
      (f) => f.match.replace(/\D/g, "") !== "22997246499",
    );
    expect(
      invalid,
      `Exibições de telefone inválidas:\n${invalid
        .map((f) => `  - ${f.file}: ${f.match}`)
        .join("\n")}\nEsperado: ${EXPECTED_DISPLAY}`,
    ).toEqual([]);
  });

  it("links wa.me incluem mensagem pré-definida (?text=...)", () => {
    const HREF_WA = /wa\.me\/\d+(\?[^"'`\s)]+)?/g;
    const missing: { file: string; match: string }[] = [];
    for (const file of files) {
      const rel = relative(process.cwd(), file).replace(/\\/g, "/");
      if (ALLOWLIST.has(rel)) continue;
      const content = readFileSync(file, "utf8");
      for (const m of content.matchAll(HREF_WA)) {
        if (!m[1] || !/text=/.test(m[1])) {
          // ContactSection monta a query dinamicamente via template string,
          // então também aceitamos uso imediato de `?text=${...}`.
          const idx = m.index ?? 0;
          const after = content.slice(idx, idx + m[0].length + 20);
          if (!/\?text=/.test(after)) {
            missing.push({ file: rel, match: m[0] });
          }
        }
      }
    }
    expect(
      missing,
      `Links wa.me sem mensagem pré-definida:\n${missing
        .map((f) => `  - ${f.file}: ${f.match}`)
        .join("\n")}`,
    ).toEqual([]);
  });
});