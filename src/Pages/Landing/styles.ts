import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 120px;
  }

  .login-btn {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: var(--primary);
  }

  .register-btn {
    background: var(--primary);
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(37, 134, 212, 0.3);
    }
  }
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 5% 5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);

  .hero-content {
    flex: 1;
    padding-right: 5rem;
    animation: ${fadeIn} 1s ease-out;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: #2c3e50;
      line-height: 1.2;
    }

    p {
      font-size: 1.2rem;
      color: #5a6c7f;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    button {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(37, 134, 212, 0.3);
      }
    }
  }

  .hero-image {
    flex: 1;
    img {
      width: 100%;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding-top: 6rem;

    .hero-content {
      padding-right: 0;
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Features = styled.section`
  padding: 5rem 5%;
  background: white;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: #2c3e50;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
    
    h2 {
      font-size: 2rem;
    }
  }
`;

export const FeatureCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }

  i {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    color: #5a6c7f;
    line-height: 1.6;
  }
`;

export const CTASection = styled.section`
  padding: 5rem 5%;
  text-align: center;
  background: linear-gradient(135deg, #2586d4 0%, #1a6aa8 100%);
  color: white;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  button {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    background: white;
    color: var(--primary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
    }
  }
`;

export const Footer = styled.footer`
  background: #f8f9fa;
  padding: 4rem 5% 2rem;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .footer-section {
    h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        color: #5a6c7f;
        margin-bottom: 0.5rem;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .copyright {
    text-align: center;
    color: #5a6c7f;
    padding-top: 2rem;
    border-top: 1px solid #dee2e6;
  }
`; 