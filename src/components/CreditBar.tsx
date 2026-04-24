const CreditBar = () => {
  return (
    <div className="bg-[#0a0a0a] border-t border-white/5 py-4 px-4 animate-fade-in">
      <p className="text-center font-body text-xs sm:text-sm text-white/60 tracking-wide">
        Site Desenvolvido por{" "}
        <a
          href="https://wa.me/5522997455396"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#C4A35A] hover:text-[#E0BE74] hover:tracking-wider transition-all duration-300 hover:underline underline-offset-4 decoration-[#C4A35A]/60"
        >
          PL DIGITAL
        </a>
      </p>
    </div>
  );
};

export default CreditBar;
