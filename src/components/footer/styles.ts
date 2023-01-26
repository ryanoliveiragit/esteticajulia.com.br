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
`

export const IconsContainer = styled.div`
    font-size: 1.5rem;
    display: flex;
    gap: 2rem;
`