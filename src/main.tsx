import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import { App } from './components/App.tsx';

createRoot(document.getElementById("root") as HTMLElement)
  .render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>,
  )

