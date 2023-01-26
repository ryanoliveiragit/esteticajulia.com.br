import { ContainerContato, ContentContact } from "./styles";
import Modelo from "../../assets/tratamento.jpeg";
import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

export function Contato() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerContato>
      <ContentContact>
        <h1>Entre em contato com a gente!</h1>
        <span>R.Taltalta, 234</span>
        <span>contato@contato.com</span>
        <button>AGENDE SUA CONSULTA</button>
      </ContentContact>
      <Image data-aos="fade-up" src={Modelo} alt="modelo" width={600} />
    </ContainerContato>
  );
}
