import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
background: linear-gradient(135deg, #374151 0%, #111827 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text.primary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.sm};
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const StatsSection = styled.section`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 500;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <div className="container">
          <HeroTitle>Профессиональное образование онлайн</HeroTitle>
          <HeroSubtitle>
            Получите востребованные навыки и официальные документы 
            о дополнительном образовании от ведущих экспертов
          </HeroSubtitle>
          <CTAButton to="/courses">
            Найти курс
          </CTAButton>
        </div>
      </HeroSection>

      <FeaturesSection>
        <div className="container">
          <SectionTitle>Почему выбирают нас</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <div className="icon">📜</div>
              <h3>Официальные документы</h3>
              <p>Все курсы завершаются выдачей удостоверений или дипломов установленного образца</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon">👨‍🏫</div>
              <h3>Эксперты-практики</h3>
              <p>Преподаватели с реальным опытом работы в ведущих компаниях отрасли</p>
            </FeatureCard>
            
            <FeatureCard>
              <div className="icon">⚡</div>
              <h3>Гибкий график</h3>
              <p>Учитесь в удобное время из любой точки мира с пожизненным доступом к материалам</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      <StatsSection>
        <div className="container">
          <StatsGrid>
            <StatItem>
              <h3>10,000+</h3>
              <p>Выпускников</p>
            </StatItem>
            <StatItem>
              <h3>150+</h3>
              <p>Курсов</p>
            </StatItem>
            <StatItem>
              <h3>95%</h3>
              <p>Довольных студентов</p>
            </StatItem>
            <StatItem>
              <h3>50+</h3>
              <p>Экспертов</p>
            </StatItem>
          </StatsGrid>
        </div>
      </StatsSection>
    </>
  );
};

export default Home;