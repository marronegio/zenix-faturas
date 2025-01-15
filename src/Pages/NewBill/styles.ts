import styled from "styled-components";

export const Page = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr .24fr;
    gap: 20px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`

export const Form = styled.form`
    height: 100%;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    gap: 20px;

    h1 {
        margin-bottom: 20px;
    }

    .form-item {
        width: 100%;
    }

    .line {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`