import styled from "styled-components";

export const Button = styled.button`
    line-height: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--primary);
    font-size: 1.5rem;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    
    &:hover {
        border-radius: 4px;
        background-color:rgb(230, 245, 255);
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;