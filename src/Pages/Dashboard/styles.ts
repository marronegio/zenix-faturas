import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid lightgray;
    position: relative;
    z-index: 1;

    h1 {
        color: var(--primary)
    }

    .logout-btn {
        position: absolute;
        right: 60px;
    }
`

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    .addBtn {
        position: absolute;
        right: 50px;
        bottom: 50px;
        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            transform: scale(1.2);
        }
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 1000px;
    max-width: 80%;

    .pagination {
        margin-top: 40px;
    }
`
