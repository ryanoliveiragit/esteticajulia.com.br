import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.pink};

  opacity: 0;
  pointer-events: none;

  transition: 0.2s ease-in;
  h1 {
    font-size: 1rem;
    position: absolute;
    left: 1rem;
    top: 1.5rem;
    color: ${(props) => props.theme.white};
  }
  > svg {
    fill: ${(props) => props.theme.white};
    position: absolute;
    cursor: pointer;
    top: 1.5rem;
    right: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 4.75rem;

    ul {
      list-style: none;
      align-items: center;
      display: flex;
      flex-direction: column;

      gap: 3rem;

      color: ${(props) => props.theme.white};

      li,
      a {
        list-style: none;
        position: relative;
        text-decoration: none;

        padding: 0 10px;
        cursor: pointer;

        color: ${(props) => props.theme.white};

        li,
        a {
          list-style: none;
          text-decoration: none;
          color: ${(props) => props.theme.white};
        }
      }
      li:after {
        content: "";
        position: absolute;
        background-color: ${(props) => props.theme.white};
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
        background-color: ${(props) => props.theme.white};
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
    }

    div {
      display: flex;
    }

    button {
      background-color: ${(props) => props.theme.white};
      padding: 0.6rem 1.5rem;

      border-radius: 40px;
      border: 1px solid ${(props) => props.theme.pink};
      color: ${(props) => props.theme.pink};

      font-weight: 700;
      font-size: 0.87rem;
      cursor: pointer;
      line-height: 23px;
    }

  ${({ isVisible }: { isVisible: any }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
