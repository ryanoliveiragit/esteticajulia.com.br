import { ContainerFooter, IconsContainer } from "./styles";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

export function Footer() {
  return (
    <ContainerFooter>
      <div>
        <h1>Julia</h1>
        <span>2023 - Julia.</span>
        <span>Todos direitos reservados</span>
      </div>
      <IconsContainer>
        <AiOutlineInstagram />
        <FiFacebook />
        <AiOutlineYoutube />
      </IconsContainer>
    </ContainerFooter>
  );
}
