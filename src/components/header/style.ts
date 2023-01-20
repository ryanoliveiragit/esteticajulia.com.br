import styled from "styled-components";

export const TitleJu = styled.h1`
  color: ${(props) => props.theme["gray-900"]};
  font-size: 1.5rem;

  font-weight: 500;
`;

export const TitleLia = styled.h1`
  color: ${(props) => props.theme.pink};
  font-size: 1.5rem;
`;
export const ContainerHeader = styled.header`
  padding: 1.5rem 7.75rem;

  background-color: ${(props) => props.theme.white};
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;

    align-items: center;

    div {
      display: flex;
    }

    ul {
      display: flex;
      gap: 32px;

      li {
        color: ${(props) => props.theme.pink};
        list-style: none;

        cursor: pointer;
      }
    }
    svg {
        display: none;
        cursor: pointer;
    }
    button {
      background-color: ${(props) => props.theme.white};
      padding: 0.6rem 1.5rem;

      border-radius: 40px;
      border: 1px solid ${(props) => props.theme.pink};
      color: ${(props) => props.theme.pink};

      font-weight: bold;
      font-size: 0.87rem;

      line-height: 18px;

      cursor: pointer;
    }
  }
  @media only screen and (max-width: 870px) {
    ul > li {
      display: none;
    }
    svg {
        display: block!important;
      }
    button {
      display: none;
    }
    padding: 1.6rem 1.5rem;
  }
`;
