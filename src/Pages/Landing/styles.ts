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

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const titleGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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
  padding: 8rem 10% 5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);

  .hero-content {
    flex: 1;
    padding-right: 5rem;
    animation: ${fadeIn} 1s ease-out;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(
        120deg,
        var(--primary),
        #3498db,
        #2586d4,
        #1a6aa8,
        var(--primary)
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: ${titleGradient} 5s linear infinite;
      text-shadow: 0 2px 10px rgba(37, 134, 212, 0.1);
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, var(--primary), #3498db);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(37, 134, 212, 0.15);

    &::before {
      opacity: 0.05;
    }

    i {
      transform: scale(1.2) rotate(10deg);
      color: var(--primary);
    }

    h3 {
      color: var(--primary);
    }
  }

  i {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    transition: color 0.4s ease;
    position: relative;
    z-index: 2;
  }

  p {
    color: #5a6c7f;
    line-height: 1.6;
    position: relative;
    z-index: 2;
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

export const MarqueeStrip = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;

  .marquee-content {
    display: flex;
    gap: 2rem;
    white-space: nowrap;
    animation: ${marqueeAnimation} 30s linear infinite;

    .marquee-item {
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0 1rem;
      
      .hashtag {
        color: var(--primary);
        margin-right: 2px;
      }
    }
  }

  &:hover .marquee-content {
    animation-play-state: paused;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #1a1a1a, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #1a1a1a, transparent);
  }
`;

export const PricingSection = styled.section`
  padding: 5rem 5%;
  background: #f8f9fa;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .subtitle {
    color: #5a6c7f;
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .pricing-card {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(37, 134, 212, 0.15);
    }

    .pricing-header {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;

      h3 {
        color: var(--primary);
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }

      .price {
        font-size: 2rem;
        color: #2c3e50;
        
        .currency {
          font-size: 1.5rem;
          vertical-align: top;
          margin-right: 5px;
        }

        .amount {
          font-size: 3.5rem;
          font-weight: 700;
        }

        .cents {
          font-size: 1.5rem;
          vertical-align: top;
        }
      }

      .installments {
        color: #5a6c7f;
        margin-top: 0.5rem;
      }
    }

    a {
      text-decoration: none;
    }

    .benefits {
      text-align: left;
      margin-bottom: 2rem;

      h4 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
      }

      ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;

        li {
          color: #5a6c7f;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;

          i {
            color: #2ecc71;
            margin-right: 10px;
          }
        }
      }
    }

    button {
      background: var(--primary);
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 auto;

      &:hover {
        background: #1a6aa8;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(37, 134, 212, 0.3);
      }

      i {
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: translateX(5px);
      }
    }
  }

  .trust-indicators {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;

    .indicator {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #5a6c7f;

      i {
        color: var(--primary);
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    .pricing-card {
      padding: 2rem;
    }

    .trust-indicators {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    .benefits ul {
      grid-template-columns: 1fr;
    }
  }
`; 