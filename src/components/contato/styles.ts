import styled from "styled-components";

export const ContainerContato = styled.div`
    background-color: red;
    display: flex;
    gap: 8.8rem;
    padding: 10rem 7.5rem;
`

export const ContentContact = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 25rem;

    h1{
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

        font-size: .85rem;
        font-weight: 700;
        line-height: 14px;

        max-width: 16rem;
    }
`