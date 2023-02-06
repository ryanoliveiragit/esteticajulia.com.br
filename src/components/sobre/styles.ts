import styled from "styled-components";

export const ContainerSobre = styled.div`
  padding: 1rem 7.75rem;
  background-color: ${(props) => props.theme["purple-50"]};
  align-items: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 0rem 1rem;
    gap: 4rem;
    }

`;
export const ContentSobre = styled.div`
  padding: 10rem 7.75rem;
  align-items: center;
  display: flex;
  gap: 4.1rem;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    gap: 4rem;
    }

  @media screen and (max-width: 900px) {
    padding: 0rem 1rem;
    gap: 4rem;

    img {
      width: 20rem;
      height: 15rem;
    }
  }

  img {
    border-radius: 20px;
  }

  section {
    padding: 2rem 0rem;

    span {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 8%;
      line-height: 21px;

      color: ${(props) => props.theme.pink};
      margin-bottom: 0.6rem;
    }

    h1 {
      max-width: 450px;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 52px;
      margin-bottom: 1.5rem;

      color: ${(props) => props.theme["gray-900"]};

      @media only screen and (max-width: 900px) {
        font-size: 1.8rem;
        line-height: 39px;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
