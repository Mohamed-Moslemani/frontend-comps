import NewChatButton from '../common/NewChatButton.jsx';
import ThemeToggleButton from '../common/ThemeToggleButton.jsx';
import { useLocation } from 'react-router-dom';

function HeaderActions({ theme, onToggleTheme, onClearChat }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <NewChatButton onClick={onClearChat} />
      )}
      <ThemeToggleButton theme={theme} onClick={onToggleTheme} />
    </>
  );
}

export default HeaderActions;
