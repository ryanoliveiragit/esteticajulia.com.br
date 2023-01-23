import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { ContainerIcons } from "../style";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

import Link from 'next/link'

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
      "https://api.whatsapp.com/send/?phone=551197363973&text&type=phone_number&app_absent=0"
    );
  }
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose onClick={() => setMenuIsVisible(false)} size={25} />
          <h1>Julia</h1>
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </ul>
        <button onClick={contact}>AGENDE SUA CONSULTA</button>
        <ContainerIcons>
          <Link href={'/'}><AiOutlineInstagram /></Link>
          <Link href={'/'}><FiFacebook /></Link>
          <Link href={'/'}><AiOutlineYoutube /></Link>
        </ContainerIcons>
      </nav>
    </Container>
  );
}
