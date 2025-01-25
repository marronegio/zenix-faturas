import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--text-title);
    margin-top: 1rem;
  }

  .form-item {
    margin-bottom: 1rem;
  }

  .line {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;