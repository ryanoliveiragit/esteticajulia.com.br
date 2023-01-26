import { ContentSobre } from "./styles";
import { ContainerSobre } from "./styles";
import Image from "next/image";
import Modelo from '../../assets/modelo.svg'

export function Sobre() {
  return (
    <ContainerSobre>
      <ContentSobre>
      <Image src={Modelo} alt="modelo" width={400} />
        <section>
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
