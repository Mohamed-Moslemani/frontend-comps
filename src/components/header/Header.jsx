function Header({ logoUrl, brandName = 'Strategy&', appTitle = 'Invoice Intelligence', leftActions, rightActions }) {
  return (
    <header className="bg-[#A22020] px-8 py-3.5 border-b border-white/10 flex justify-between items-center sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-6 animate-fade-in">
        <div className="flex items-center gap-3">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className="h-10 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
          ) : (
            <div className="h-10 w-32 bg-white/20 border-2 border-dashed border-white/40 rounded-lg grid place-items-center text-white/60 text-xs font-medium">
              Logo Here
            </div>
          )}
          <div className="ml-3">
            <h1 className="text-white text-lg font-medium tracking-tight opacity-95">{appTitle}</h1>
            <div className="h-px bg-gradient-to-r from-white/50 via-white/30 to-transparent mt-1"></div>
          </div>
        </div>
        {leftActions}
      </div>
      <div className="flex items-center gap-2 animate-fade-in">
        {rightActions}
      </div>
    </header>
  );
}
 
export default Header;