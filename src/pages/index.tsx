import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { MenuMobile } from "../components/header/menuMobile";

import {
  ContainerBoasVindas,
  ContainerHome,
  ContainerImage,
  SectionNumbers,
  Container,
  Number,
  Divider,
} from "../styles/home/styles";
import { defaultTheme } from "../styles/themes/default";

import Image from "next/image";
import Modelo from "../assets/modelo.svg";
import { Servicos } from "../components/serviços";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=551197363973&text&type=phone_number&app_absent=0"
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Container>
        <ContainerHome>
          <ContainerBoasVindas>
            <span>BOAS-VINDAS 👋</span>
            <h1>Essência da beleza natural</h1>
            <p>
              De ao seu corpo o cuidado que ele realmente merece! Com
              perfeccionismo e dedicação
            </p>
            <button onClick={contact}>AGENDE SUA CONSULTA</button>
          </ContainerBoasVindas>
          <ContainerImage>
            <Image src={Modelo} alt="modelo" width={520} />
          </ContainerImage>
        </ContainerHome>
        <SectionNumbers>
          <div>
            <Number>+3.500</Number>
            <span>Pacientes atendidos</span>
            <Divider />
          </div>
          <div>
            <Number>+15</Number>
            <span>Especialistas disponíveis</span>
            <Divider />
          </div>
          <div>
            <Number>+10</Number>
            <span>Anos no mercado</span>
          </div>
        </SectionNumbers>
      </Container>
      <Servicos />
    </ThemeProvider>
  );
}
