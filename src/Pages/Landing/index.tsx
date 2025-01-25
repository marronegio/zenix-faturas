import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Container, 
  Hero, 
  Features, 
  FeatureCard, 
  CTASection,
  NavBar,
  Footer,
  MarqueeStrip,
  PricingSection
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
          <h1>Simplifique a gestão<br/>das suas faturas</h1>
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

      <MarqueeStrip>
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="hashtag">#</span>GestãoFinanceira
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Produtividade
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Automatização
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>ControleFinanceiro
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Eficiência
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Organização
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Inovação
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>GestãoEmpresarial
          </div>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <div className="marquee-item">
            <span className="hashtag">#</span>GestãoFinanceira
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Produtividade
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Automatização
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>ControleFinanceiro
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Eficiência
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Organização
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>Inovação
          </div>
          <div className="marquee-item">
            <span className="hashtag">#</span>GestãoEmpresarial
          </div>
        </div>
      </MarqueeStrip>

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

      <PricingSection data-aos="fade-up">
        <h2>Invista no futuro do seu negócio</h2>
        <p className="subtitle">Tenha seu próprio sistema personalizado de gestão de faturas</p>
        
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Sistema Exclusivo</h3>
            <div className="price">
              <span className="currency">R$</span>
              <span className="amount">2.779</span>
              <span className="cents">,00</span>
            </div>
            <p className="installments">ou em até 10x com acréscimo</p>
          </div>

          <div className="benefits">
            <h4>O que está incluído:</h4>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                Sistema personalizado e exclusivo
              </li>
              <li>
                <i className="fas fa-check"></i>
                Domínio próprio
              </li>
              <li>
                <i className="fas fa-check"></i>
                Personalização com sua marca
              </li>
              <li>
                <i className="fas fa-check"></i>
                Suporte técnico especializado
              </li>
              <li>
                <i className="fas fa-check"></i>
                Atualizações de segurança
              </li>
              <li>
                <i className="fas fa-check"></i>
                Backup automático dos dados
              </li>
            </ul>
          </div>

          <Link to="/login">
            <button>
              Começar Agora
              <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>

        <div className="trust-indicators">
          <div className="indicator">
            <i className="fas fa-lock"></i>
            <span>Pagamento Seguro</span>
          </div>
          <div className="indicator">
            <i className="fas fa-headset"></i>
            <span>Suporte Dedicado</span>
          </div>
          <div className="indicator">
            <i className="fas fa-shield-alt"></i>
            <span>Garantia de Satisfação</span>
          </div>
        </div>
      </PricingSection>

      <CTASection data-aos="fade-up">
        <h2>Pronto para começar?</h2>
        <p>Junte-se a milhares de empresas que já simplificaram sua gestão financeira</p>
        <Link to="/login">
          <button>Confira uma demonstração</button>
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