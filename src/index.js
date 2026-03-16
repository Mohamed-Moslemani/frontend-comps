// Styles: import this once in your app to get theme + utilities
import './styles.css';

// Components
export { default as Header } from './components/header/Header.jsx';
export { default as Messages } from './components/chat/Messages.jsx';
export { default as Message } from './components/chat/Message.jsx';
export { default as InputBar } from './components/chat/InputBar.jsx';
export { default as FilesPreview } from './components/chat/FilesPreview.jsx';
export { default as SendButton } from './components/common/SendButton.jsx';
export { default as NewChatButton } from './components/common/NewChatButton.jsx';
export { default as ThemeToggleButton } from './components/common/ThemeToggleButton.jsx';
export { default as CopyButton } from './components/common/CopyButton.jsx';
export { default as DownloadButton } from './components/common/DownloadButton.jsx';
export { default as LogoutButton } from './components/common/LogoutButton.jsx';

// Authentication
export { default as AuthGate } from './components/authentication/AuthGate.jsx';
export { AuthProvider, useAuth } from './components/authentication/AuthProvider.jsx';
export { createMsalConfig, createLoginRequest, defaultLoginRequest } from './components/authentication/msalconfig.jsx';

// Hooks
// export { useTheme } from './hooks/useTheme.js';
