import { ContainerHeader, TitleJu, TitleLia } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";

import { NAV_LINKS } from "../../utils/NAV_LINKS";
import { Link } from "react-scroll";

import { animateScroll as scroll } from "react-scroll";

function handleClick() {
  scroll.scrollToTop();
}

export function Header({ setMenuIsVisible }: any) {
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511973639735&text&type=phone_number&app_absent=0"
    );
  }
  return (
    <ContainerHeader>
      <nav>
        <div>
          <TitleJu>Ju</TitleJu>
          <TitleLia>lia</TitleLia>
        </div>
        <ul>
          <li id="inicio" onClick={handleClick}>Inicio</li>
          {NAV_LINKS.map((itens) => {
            return (
                <Link
                  key={itens.id}
                  to={itens.title}
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  {itens.title}
                </Link>
            );
          })}
        </ul>
        <button onClick={contact}>AGENDAR CONSULTA</button>
        <RxHamburgerMenu
          onClick={() => setMenuIsVisible(true)}
        ></RxHamburgerMenu>
      </nav>
    </ContainerHeader>
  );
}
