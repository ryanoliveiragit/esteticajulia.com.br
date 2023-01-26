import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: red;
  padding: 5rem 7.6rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 600px) {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
  }
`;

export const ContentFooter = styled.div`
    span {
      margin-top: 1rem;
    }
    padding-top: 2rem;
    display: flex;
    width: 24rem;
    flex-direction: column;
    gap: 0.2rem;
    max-width: 15rem;
    font-size: 0.85rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const IconsContainer = styled.div`
  font-size: 1.5rem;

  width: 15rem;
  display: flex;
  gap: 2rem;
  svg {
    cursor: pointer;
    transition: .3s;
    :hover {
      color: ${(props) => props.theme["pink-100"]};
    }
  }
  @media screen and (max-width: 900px) {
    padding-top: 1rem;
    font-size: 2rem;
  }
`;
