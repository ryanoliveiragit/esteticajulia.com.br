import styled from "styled-components";

export const ContainerSobre = styled.div`
    padding: 1rem 7.75rem;
    background-color: ${(props) => props.theme["purple-50"]};
    align-items: center;
    display: flex;
    justify-content: center;

`
export const ContentSobre = styled.div`
    padding: 10rem 7.6rem;
    display: flex;
    gap: 4.1rem;

    img {
        border-radius: 20px;
    }

    section {
        padding: 2rem 0rem;

        span {
            font-size: .85rem;
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
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            line-height: 24px;
        }
    }
`