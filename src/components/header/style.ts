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

  z-index: 10;
  background-color: ${(props) => props.theme.white};
  width: 100%;

  position: fixed;

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
      list-style: none;
      @media only screen and (max-width: 900px) {
        #inicio {
          display: none;
        }
      }
      li,
      a {
        list-style: none;
        position: relative;
        text-decoration: none;

        padding: 0 10px;
        cursor: pointer;

        color: ${(props) => props.theme.pink};

        li,
        a {
          list-style: none;
          text-decoration: none;
          color: ${(props) => props.theme.pink};
        }
      }
      li:after {
        content: "";
        position: absolute;
        background-color: ${(props) => props.theme.pink};
        height: 3px;
        width: 0%;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
      }
      li:hover:after {
        width: 100%;
      }

      a:after {
        content: "";
        position: absolute;
        background-color: ${(props) => props.theme.pink};
        height: 3px;
        width: 0%;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
      }
      a:hover:after {
        width: 100%;
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

      transition: all 0.3s;

      cursor: pointer;
      :hover {
        background-color: ${(props) => props.theme.pink};
        color: ${(props) => props.theme.white};
      }
    }
  }
  @media only screen and (max-width: 900px) {
    a {
      display: none;
    }
    svg {
      display: block !important;
    }
    button {
      display: none;
    }
    padding: 1.6rem 1.5rem;
  }
`;
export const ContainerIcons = styled.div`
  margin-top: 3rem;

  font-size: 1.5rem;
  gap: 2rem;
  a {
    color: white;
  }
`;
