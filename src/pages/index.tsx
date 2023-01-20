import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { MenuMobile } from "../components/header/menuMobile";

import { ContainerHome } from "../styles/home/styles";
import { defaultTheme } from "../styles/themes/default";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerHome>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible} />
        <ContainerHome>teste</ContainerHome>
      </ContainerHome>
    </ThemeProvider>
  );
}
