import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  h2 {
    margin: 1.5rem 0;
    color: var(--text-title);
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  input {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;

    &:focus {
      border-color: var(--primary);
      outline: none;
    }
  }

  input[type="email"] {
    grid-column: span 2;
  }

  h2 {
    grid-column: 1 / -1;
  }

  button {
    grid-column: 1 / -1;
    padding: 1rem;
    margin-top: 1rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`; 