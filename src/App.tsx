import { Box } from '@mantine/core';
import { HeaderResponsive, HeaderResponsiveProps } from './components/navbar';

function App() {
  const headerLinks: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'About' },
    { link: '/skills', label: 'Skills' },
    { link: '/contact', label: 'Contact Me' },
  ];

  return (
    <Box>
      <HeaderResponsive links={headerLinks} />
    </Box>
  );
}

export default App;
