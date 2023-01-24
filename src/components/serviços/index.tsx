import { GoCheck } from "react-icons/go";
import { Container, Content, Cards } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Servicos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Content data-aos="fade-up">
        <span>SERVIÇOS</span>
        <h1>Como podemos ajudá-lo a se sentir melhor?</h1>
      </Content>
      <Cards data-aos="fade-up">
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
      </Cards>
      <Cards data-aos="fade-up">
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Problemas digestivos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
      </Cards>
    </Container>
  );
}
