import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './main.css';
import Home from './pages/Home';
import { Profile } from './pages/Profile';
import Skills from './pages/Skills';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function Root() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <React.StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: 'blue',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <RouterProvider router={router} />
        </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />
);
