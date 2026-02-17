import { Link, useLocation } from 'react-router-dom';
 
function HeaderNav() {
  const location = useLocation();
 
  return (
    <nav className="flex items-center gap-1">
      <Link
        to="/"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          location.pathname === '/'
            ? 'bg-white/20 text-white border border-white/30'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        Extract
      </Link>
      <Link
        to="/validate"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          location.pathname === '/validate'
            ? 'bg-white/20 text-white border border-white/30'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        Validate
      </Link>
 
      <Link
        to="/costs"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          location.pathname === '/costs'
            ? 'bg-white/20 text-white border border-white/30'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        Costs
      </Link>
    </nav>
  );
}
 
export default HeaderNav;