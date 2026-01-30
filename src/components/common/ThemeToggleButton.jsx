import { Sun, Moon } from 'lucide-react';

function ThemeToggleButton({ theme = 'light', title = 'Toggle theme', onClick, size = 20, disabled = false }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="btn btn-icon btn-header focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
    >
      {isDark ? (
        <Moon size={size} strokeWidth={2.5} className="animate-fade-in" />
      ) : (
        <Sun size={size} strokeWidth={2.5} className="animate-fade-in" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
