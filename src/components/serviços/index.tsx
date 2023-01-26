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
    <Container id="Serviços">
      <Content data-aos="fade-up">
        <span>SERVIÇOS</span>
        <h1>Como podemos ajudá-lo a se sentir melhor?</h1>
      </Content>
      <Cards data-aos="fade-up">
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Limpeza de pele</h1>
          <p>
            A limpeza de pele é um tratamento estético que visa remover
            impurezas, células mortas da pele e excesso de oleosidade, deixando
            a pele mais limpa e saudável. Pode incluir passos como a remoção de
            maquiagem, aplicação de produtos de limpeza, esfoliação, extracção
            de cravos, e aplicação de máscaras ou produtos hidratantes.
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Microagulhamento</h1>
          <p>
            O Microagulhamento é um tratamento estético que utiliza uma
            ferramenta de agulhas minúsculas para fazer pequenos furos na pele.
            Isso pode estimular a produção de colágeno e elastina, ajudando a
            melhorar a textura, tonalidade e firmeza da pele. O tratamento pode
            ser usado para tratar linhas finas, cicatrizes de acne, manchas
            escuras e outros problemas de pele.
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Peellings</h1>
          <p>
            Peelings são tratamentos estéticos que visam remover as camadas
            superiores da pele morta e promover a renovação celular. Eles podem
            ser feitos com ácidos químicos ou substâncias mecânicas, como o
            bicarbonato de sódio ou o açúcar. Peelings podem ajudar a melhorar a
            textura e a tonalidade da pele, reduzir a aparência de manchas e
            cicatrizes, e deixar a pele com uma aparência mais jovem e saudável
          </p>
        </div>
      </Cards>

      <Cards data-aos="fade-up">
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Hydra Lips</h1>
          <p>
            Hydra Lips é um tratamento para os lábios que visa hidratá-los e
            nutri-los, deixando-os mais saudáveis e com aparência mais jovem.
            Pode incluir aplicação de produtos hidratantes, massagens ou outros
            tratamentos para melhorar a circulação e aumentar a umidade dos
            lábios.
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Hidratação Facial</h1>
          <p>
            A hidratação facial é um tratamento estético que visa aumentar a
            umidade e nutrir a pele, deixando-a mais saudável e jovem. Inclui
            limpeza da pele, aplicação de produtos hidratantes e pode incluir
            massagens ou outros tratamentos para melhorar a circulação.
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Tratamento de acne</h1>
          <p>
            Os tratamentos visam reduzir a inflamação, diminuir a oleosidade e
            melhorar a aparência da pele, incluindo limpeza de pele profunda,
            terapia com ácidos e outros produtos. Fornecemos orientações para
            cuidados diários da pele para os pacientes. Eles podem esperar
            melhorias significativas na aparência da pele, com menos cravos e
            espinhas, e uma aparência mais uniforme e saudável.
          </p>
        </div>
      </Cards>
    </Container>
  );
}
