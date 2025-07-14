import { Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { FooterProps, MyFooter } from "./components/Footer";
import { Navigationbar, NavigationbarProps } from "./components/Navigationbar";

function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const footerLinks: FooterProps["links"] = [
    { link: "/", label: `Hampus Isebring • ${currentYear} ☕` },
  ];

  const headerLinks: NavigationbarProps["links"] = [
    { link: "/", label: t("navHome") },
    { link: "/profile", label: t("navProfile") },
    // { link: "/cv", label: "CV" },
    // { link: "/skills", label: "Skills" },
    // { link: "/portfolio", label: "Portfolio" },
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
