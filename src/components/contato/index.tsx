import { ContainerContato, ContentContact } from "./styles";
import Modelo from "../../assets/tratamento.jpeg";
import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

export function Contato() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerContato>
      <ContentContact data-aos="fade-up">
        <h1>Entre em contato com a gente!</h1>
        <div>
          <GoLocation size={20}/>
          <span>R.Taltalta, 234</span>
        </div>
        <div>
          <MdOutlineMail size={20}/>
          <span>contato@contato.com</span>
        </div>
        <button>AGENDE SUA CONSULTA</button>
      </ContentContact>
      <Image data-aos="fade-up" src={Modelo} alt="modelo" width={600} />
    </ContainerContato>
  );
}
