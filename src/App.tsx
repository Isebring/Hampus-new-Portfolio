import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { FooterProps, MyFooter } from "./components/Footer";
import { Navigationbar, NavigationbarProps } from "./components/Navigationbar";

function App() {
  const footerLinks: FooterProps["links"] = [
    { link: "/", label: "Hampus Isebring • 2024 ☕" },
  ];

  const headerLinks: NavigationbarProps["links"] = [
    { link: "/", label: "Home" },
    { link: "/profile", label: "Profile" },
    { link: "/cv", label: "CV" },
    { link: "/skills", label: "Skills" },
    { link: "/portfolio", label: "Portfolio" },
  ];

  return (
    <Box>
      <Navigationbar links={headerLinks} />
      <main style={{ marginBottom: "20rem" }}>
        <Outlet />
      </main>
      <MyFooter links={footerLinks} />
    </Box>
  );
}

export default App;
