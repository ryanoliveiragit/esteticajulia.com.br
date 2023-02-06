import { ContainerContato, ContentContact } from "./styles";
import Modelo from "../../assets/tratamento.jpeg";
import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";

export function Contato() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511973639735&text&type=phone_number&app_absent=0"
    );
  }
  return (
    <ContainerContato>
      <ContentContact data-aos="fade-up">
        <h1>Entre em contato com a gente!</h1>
        <div>
          <AiOutlineInstagram size={20}/>
          <a href="https://www.instagram.com/juliamangiaestetica/" target="_blank">@juliamangiaestetica</a>
        </div>
        <div>
          <MdOutlineMail size={20}/>
          <span>Juliamangia.contato@gmail.com</span>
        </div>
        <button onClick={contact}>AGENDE SUA CONSULTA</button>
      </ContentContact>
      <Image data-aos="fade-up" src={Modelo} alt="modelo" width={600} />
    </ContainerContato>
  );
}
