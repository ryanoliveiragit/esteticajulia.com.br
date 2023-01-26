import { ContentSobre } from "./styles";
import { ContainerSobre } from "./styles";
import Image from "next/image";
import Modelo from '../../assets/tratamento.jpeg'
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Sobre() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <ContainerSobre>
      <ContentSobre>
      <Image data-aos="fade-up" src={Modelo} alt="modelo" width={500} />
        <section data-aos="fade-up">
          <span>SOBRE NÓS</span>
          <h1>Entenda quem somos e por que existimos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            quam dolor voluptate unde voluptatibus exercitationem a maxime animi
            repudiandae! Dolorem dolores repellat magni maiores quae qui minima
            tenetur, excepturi debitis!
          </p>
        </section>
      </ContentSobre>
    </ContainerSobre>
  );
}
