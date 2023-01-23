import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 7.75rem;
`;
export const ContainerHome = styled.main`
  display: flex;
  width: 100%;

  gap: 3.1rem;
`;

export const ContainerBoasVindas = styled.div`
  flex: 1;
  margin-top: 5.9rem;
  max-width: 605px;

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
  }
`;
export const ContainerImage = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    width: 100%;
  }
`;
export const SectionNumbers = styled.div`
  margin-top: -5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #f7f7f9;
  border-radius: 6px;
  padding: 3.75rem 7.5rem;

  box-sizing: border-box;
  background-color: ${(props) => props.theme["purple-50"]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid #ff99b6;

    span {
      font-weight: normal;
      color: ${(props) => props.theme["pink-100"]};
    }
  }
`;
export const Number = styled.span`
  font-weight: 700!important;
  font-size: 3rem;
  line-height: 62.4px;

  color: ${(props) => props.theme["pink-100"]};
`;
