import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Container, 
  Hero, 
  Features, 
  FeatureCard, 
  CTASection,
  NavBar,
  Footer
} from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../../assets/logo.png";

export function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Container>
      <NavBar>
        <img src={logo} alt="Zenix Faturas" />
        <div>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/login">
            <button className="register-btn">Começar Grátis</button>
          </Link>
        </div>
      </NavBar>

      <Hero>
        <div className="hero-content" data-aos="fade-right">
          <h1>Simplifique a gestão das suas faturas</h1>
          <p>
            Organize, crie e gerencie todas as suas faturas em um só lugar. 
            Solução completa para empresas de todos os tamanhos.
          </p>
          <Link to="/login">
            <button>Comece Agora</button>
          </Link>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg" alt="Dashboard" />
        </div>
      </Hero>

      <Features>
        <h2 data-aos="fade-up">Por que escolher o Zenix Faturas?</h2>
        <div className="features-grid">
          <FeatureCard data-aos="fade-up" data-aos-delay="100">
            <i className="fas fa-bolt"></i>
            <h3>Rápido e Eficiente</h3>
            <p>Crie faturas profissionais em segundos com nossos modelos personalizáveis</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-cloud"></i>
            <h3>Armazenamento em Nuvem</h3>
            <p>Acesse suas faturas de qualquer lugar, a qualquer momento</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-chart-line"></i>
            <h3>Relatórios Detalhados</h3>
            <p>Acompanhe seus pagamentos e gere relatórios financeiros completos</p>
          </FeatureCard>
        </div>
      </Features>

      <CTASection data-aos="fade-up">
        <h2>Pronto para começar?</h2>
        <p>Junte-se a milhares de empresas que já simplificaram sua gestão financeira</p>
        <Link to="/login">
          <button>Experimente Grátis</button>
        </Link>
      </CTASection>

      <Footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Produto</h4>
            <ul>
              <li>Recursos</li>
              <li>Preços</li>
              <li>Integrações</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Contato</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacidade</li>
              <li>Termos</li>
              <li>Segurança</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2024 Zenix Faturas. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
} 