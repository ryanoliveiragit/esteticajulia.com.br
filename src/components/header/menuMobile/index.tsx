import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { ContainerIcons } from "../style";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

import { NAV_LINKS } from "../../../utils/NAV_LINKS";
import { Link } from "react-scroll";

import { animateScroll as scroll } from "react-scroll";

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: any;
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511973639735&text&type=phone_number&app_absent=0"
    );
  }
  function handleClick() {
    scroll.scrollToTop();
    setMenuIsVisible(false);
  }

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose onClick={() => setMenuIsVisible(false)} size={25} />
      <h1>Julia</h1>
      <nav>
        <ul>
          <li id="inicio" onClick={handleClick}>
            Inicio
          </li>
          {NAV_LINKS.map((itens) => {
            return (
              <Link
                key={itens.id}
                to={itens.title}
                smooth={true}
                offset={200}
                duration={500}
                onClick={() => setMenuIsVisible(false)}
              >
                {itens.title}
              </Link>
            );
          })}
        </ul>
        <button onClick={contact}>AGENDE SUA CONSULTA</button>
        <ContainerIcons>
          <a href={"/"}>
            <AiOutlineInstagram />
          </a>
          <a href={"/"}>
            <FiFacebook />
          </a>
          <a href={"/"}>
            <AiOutlineYoutube />
          </a>
        </ContainerIcons>
      </nav>
    </Container>
  );
}
