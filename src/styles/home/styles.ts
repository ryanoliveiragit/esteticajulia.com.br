import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 7.75rem;

  @media only screen and (max-width: 900px) {
    padding: 1.6rem 1.5rem;
  }
`;
export const ContainerHome = styled.main`
  display: flex;
  padding-top: 5rem;
  width: 100%;
  align-items: center;
  gap: 3.1rem;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerBoasVindas = styled.div`
  flex: 1;
  margin-top: 5.9rem;
  max-width: 605px;
  @media only screen and (max-width: 900px) {
      margin-top: 1.5rem;
    }

  span {
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 8%;

    color: ${(props) => props.theme.pink};
  }
  h1 {
    margin-top: 1rem;

    font-size: 3.25rem;
    font-weight: 700;
    line-height: 67.6px;

    color: ${(props) => props.theme["gray-900"]};
  }
  p {
    margin-top: 1.5rem;

    font-size: 1.12rem;
    font-weight: 400;
    line-height: 27px;

    color: ${(props) => props.theme["gray-700"]};
  }
  button {
    cursor: pointer;

    margin-top: 2rem;
    gap: 0.9rem;
    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.pink};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;

    border-radius: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;

    transition: all .3s;
    :hover {
      background-color: ${(props) => props.theme["pink-100"]};
      color: ${(props) => props.theme.white};
    }
  }


  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      margin-top: 1rem;

      font-size: 2.18rem;
    }
  }
`;
export const ContainerImage = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    border-radius: 40px;
  }
  @media screen and (max-width: 500px) {
    img {
      height: 24rem;
      width: 95%;
      margin-top: -1rem;
      z-index: -1;
    }
  }
`;
export const SectionNumbers = styled.div`
max-width: 100rem;
  margin-top: -3rem;
  @media only screen and (max-width: 900px) {
    margin-top: -5rem;
  }
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #f7f7f9;
  border-radius: 6px;
  padding: 3.75rem 7.5rem;

  box-sizing: border-box;
  background-color: ${(props) => props.theme["purple-50"]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10));

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    text-align: center;

    span {
      font-weight: normal;
      color: ${(props) => props.theme["pink-100"]};
    }
  }
  @media only screen and (max-width: 1300px) {
    padding: 1.6rem 1.5rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 1.6rem 1.5rem;
    display: flex;
    gap: 3.75rem;
    flex-direction: column;
  }
`;
export const Number = styled.span`
  font-weight: 700 !important;
  font-size: 3rem;
  line-height: 62.4px;

  color: ${(props) => props.theme["pink-100"]};
`;
export const Divider = styled.div`
  border-right: 2px solid ${(props) => props.theme["pink-100"]};
  height: 40%;
  opacity: 0.5;
  margin-left: 14%;
  width: 15%;
  position: absolute;

  @media only screen and (max-width: 900px) {
    border: none;
  }
`;

export const Content = styled.div`
  width: 31rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    margin-top: 6.25rem;
    width: 100%;
  }

  span {
    color: ${(props) => props.theme.pink};
    font-size: 0.85rem;
    line-height: 21px;
    letter-spacing: 8%;
    font-weight: 700;
  }
  h1 {
    line-height: 52px;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 900px) {
      font-size: 2rem;
      line-height: 39px;
    }
  }
`;