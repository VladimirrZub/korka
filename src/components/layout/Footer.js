import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.border};
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: ${props => props.theme.colors.text.secondary};
        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>🎓 Корочки.есть</h3>
            <p>Портал дополнительного профессионального образования. Получите востребованные навыки и официальные документы.</p>
          </FooterSection>
          
          <FooterSection>
            <h3>Курсы</h3>
            <ul>
              <li><a href="#programming">Программирование</a></li>
              <li><a href="#design">Дизайн</a></li>
              <li><a href="#marketing">Маркетинг</a></li>
              <li><a href="#management">Менеджмент</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Поддержка</h3>
            <ul>
              <li><a href="#help">Помощь</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><a href="#faq">Частые вопросы</a></li>
              <li><a href="#docs">Документы</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Контакты</h3>
            <ul>
              <li>📧 info@korochki.est</li>
              <li>📞 1 (234) 567-99-00</li>
              <li>📍 Великий Новгород</li>
            </ul>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © 2024 Корочки.есть. Все права защищены.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;