import { ContainerHeader, ContainerIcons, TitleJu, TitleLia } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export function Header({ setMenuIsVisible }: any) {
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=551197363973&text&type=phone_number&app_absent=0"
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
          <Link href={"/"}>Início</Link>
          <Link href={"/"}>Sobre</Link>
          <Link href={"/"}>Serviços</Link>
          <Link href={"/"}>Depoimentos</Link>
        </ul>
        <button onClick={contact}>AGENDAR CONSULTA</button>
        <RxHamburgerMenu
          onClick={() => setMenuIsVisible(true)}
        ></RxHamburgerMenu>
      </nav>
    </ContainerHeader>
  );
}
