import { Container } from "./styles";
import { IoClose } from "react-icons/io5";

interface MenuMobileProps {
  menuIsVisible: any;
  setMenuIsVisible: any;
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
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
        <button>AGENDAR CONSULTA</button>
      </nav>
    </Container>
  );
}
