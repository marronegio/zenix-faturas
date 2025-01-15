import { styled } from "styled-components";

export const HeaderItem = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid lightgray;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;

    img {
        width: 150px;
    }

    h1 {
        color: var(--primary)
    }

    .logout-btn {
        position: absolute;
        right: 60px;
    }
`