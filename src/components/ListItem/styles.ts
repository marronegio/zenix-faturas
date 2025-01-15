import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightgray;
    border-radius: 8px;
    padding: 10px 24px;
    justify-content: space-between;

    .number {
        width: 80px;
        border-right: 1px solid lightgray;
    }

    .data {
        display: flex;
        align-items: center;
        gap: 20px;
        color: gray;
        font-size: .8rem;
    }
`