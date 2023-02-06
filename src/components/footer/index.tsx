import { ContainerFooter, IconsContainer, ContentFooter } from "./styles";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <h1>Julia</h1>
        <span>2023 - Julia</span>
        <p>Todos direitos reservados</p>
      </ContentFooter>
      <IconsContainer>
         <a href="https://www.instagram.com/juliamangiaestetica/" target="_blank"><AiOutlineInstagram /></a>
         <a href="https://www.instagram.com/juliamangiaestetica/" target="_blank"><FiFacebook /></a>
         <a href="https://www.instagram.com/juliamangiaestetica/" target="_blank"><AiOutlineYoutube /></a>
      </IconsContainer>
    </ContainerFooter>
  );
}
