import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { FooterProps, MyFooter } from './components/Footer';
import { HeaderResponsive, HeaderResponsiveProps } from './components/Navbar';



function App() {

  const footerLinks: FooterProps['links'] = [
    { link: '/', label: 'Email me' },
  ]

  const headerLinks: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'Home' },
    { link: '/profile', label: 'Profile' },
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
      <MyFooter links={footerLinks}/>
    </Box>
  );
}

export default App;
