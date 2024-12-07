import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Root } from '@/components/Root.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { init } from '@/init.ts';
import './index.css';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  // Configure all application dependencies.
  init(false);

  root.render(
    <StrictMode>
      <Root />
    </StrictMode>,
  );
} catch (e) {
  root.render(<EnvUnsupported />);
}
