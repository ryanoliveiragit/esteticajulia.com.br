import { ContainerHeader, ContainerIcons, TitleJu, TitleLia } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";


export function Header({ setMenuIsVisible }: any) {

  return (
    <ContainerHeader>
      <nav>
        <div>
          <TitleJu>Ju</TitleJu>
          <TitleLia>lia</TitleLia>
        </div>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </ul>
        <button>AGENDAR CONSULTA</button>
        <RxHamburgerMenu
          onClick={() => setMenuIsVisible(true)}
        ></RxHamburgerMenu>
      </nav>
    </ContainerHeader>
  );
}
