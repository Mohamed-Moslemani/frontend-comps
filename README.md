# frontend-comps

Reusable frontend UI components library (React + Tailwind v4).

## Installation

Install from npm:

```bash
npm install frontend-comps
```

## Usage

Import the CSS once (so Tailwind v4 processes the theme and utilities), then use components:

```jsx
// main.jsx or App.jsx
import 'frontend-comps/styles.css';

import { Header, Messages, InputBar, SendButton, NewChatButton } from 'frontend-comps';

function App() {
  return (
    <div>
      <Header />
      <Messages />
      <InputBar />
    </div>
  );
}
```

## Available Components

- **Header**: `Header`, `HeaderActions`, `HeaderNav`
- **Chat**: `Messages`, `Message`, `InputBar`, `FilesPreview`
- **Common**: `SendButton`, `NewChatButton`, `ThemeToggleButton`

## Peer Dependencies

- react >= 18
- react-dom >= 18
- react-router-dom >= 6

## Development

Install dependencies and build:

```bash
npm install
npm run build
```

## License

MIT
