import styled from "styled-components";

export const ContainerContato = styled.div`
  display: flex;
  gap: 8.8rem;
  padding: 10rem 7.5rem;
  align-items: center;
  justify-content: space-around;

  img {
    border-radius: 11px;
  }
  @media screen and (max-width: 900px) {
    display: flex;

    gap: 3.75rem;
    padding: 5rem 1.5rem;
    flex-direction: column;

    img {
      width: 20rem;
      height: 15rem;
    }
  }
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    gap: .5rem;
    align-items: center;
    display: flex;
    text-align: center;

    svg {
        color: pink;
        fill: pink;
    }
  }

  h1 {
    max-width: 25rem;
    font-size: 2.5rem;
    line-height: 52px;
    font-weight: 700;

    color: ${(props) => props.theme["gray-900"]};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
  }

  button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 40px;
    background-color: ${(props) => props.theme.pink};
    color: ${(props) => props.theme.white};

    font-size: 0.85rem;
    font-weight: 700;
    line-height: 14px;

    max-width: 16rem;
  }
  @media screen and (max-width: 900px) {
    
  h1 {
    font-size: 1.8rem;
    line-height: 39px;
    font-weight: 700;

    color: ${(props) => props.theme["gray-900"]};
  }
  }
`;
