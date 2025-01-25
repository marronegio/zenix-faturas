import styled from "styled-components";

export const AddButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      filter: brightness(0.9);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }
`; 