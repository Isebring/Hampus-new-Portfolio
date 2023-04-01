import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderResponsive, HeaderResponsiveProps } from './components/navbar';

function App() {
  const headerLinks: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/skills', label: 'Skills' },
    { link: '/portfolio', label: 'Portfolio' },
    { link: '/contact', label: 'Contact' },
  ];

  return (
    <Box>
      <HeaderResponsive links={headerLinks} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}

export default App;
