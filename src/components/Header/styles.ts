import { styled } from "styled-components";

export const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.05);
  z-index: 1000;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const Logo = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 120px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    img {
      width: 60px;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  a {
    text-decoration: none;
    color: #5a6c7f;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    position: relative;
    font-weight: 500;

    svg {
      font-size: 1.5rem;
      min-width: 24px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: var(--primary);
      transform: scaleY(0);
      transition: transform 0.3s ease;
    }

    &:hover {
      color: var(--primary);
      background: rgba(37, 134, 212, 0.05);

      &::before {
        transform: scaleY(1);
      }
    }

    &.active {
      color: var(--primary);
      background: rgba(37, 134, 212, 0.1);

      &::before {
        transform: scaleY(1);
      }
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 1rem;
      justify-content: center;

      span {
        display: none;
      }
    }
  }
`;

export const LogoutButton = styled.button`
  margin: 1rem 2rem;
  padding: 0.8rem;
  border: none;
  background: transparent;
  color: #e74c3c;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;

  svg {
    font-size: 1.5rem;
    min-width: 24px;
  }

  &:hover {
    background: rgba(231, 76, 60, 0.1);
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    margin: 1rem;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const HeaderNavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        text-decoration: none;
        color: #5a6c7f;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: all 0.3s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        &:hover {
            color: var(--primary);
            background: rgba(37, 134, 212, 0.05);

            &::after {
                width: 80%;
            }
        }

        &.active {
            color: var(--primary);
            background: rgba(37, 134, 212, 0.1);

            &::after {
                width: 80%;
            }
        }
    }

    .logout-btn {
        background: transparent;
        border: 2px solid #e74c3c;
        color: #e74c3c;
        font-weight: 500;
        padding: 0.6rem 1.5rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;

        &:hover {
            background: #e74c3c;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.2);
        }
    }

    @media (max-width: 768px) {
        gap: 1rem;

        a {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
        }

        .logout-btn {
            padding: 0.4rem 1rem;
            font-size: 0.9rem;
        }
    }
`