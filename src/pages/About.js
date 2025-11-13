import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const SectionText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text.primary};
  }

  .position {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 0.9rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;

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
    line-height: 1.6;
  }
`;

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Основатель и CEO',
      bio: '15+ лет в сфере образования, экс-директор образовательных программ в крупной IT-компании',
      emoji: '👩‍💼'
    },
    {
      id: 2,
      name: 'Максим Иванов',
      position: 'CTO',
      bio: 'Разработчик с 10-летним опытом, специалист в области e-learning технологий',
      emoji: '👨‍💻'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      position: 'Head of Education',
      bio: 'Педагог с 12-летним стажем, эксперт в области дистанционного обучения',
      emoji: '👩‍🏫'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Качество образования',
      description: 'Мы тщательно отбираем экспертов и постоянно обновляем программы курсов в соответствии с требованиями рынка'
    },
    {
      icon: '🤝',
      title: 'Поддержка студентов',
      description: 'Каждому студенту обеспечиваем персональную поддержку на протяжении всего обучения'
    },
    {
      icon: '💡',
      title: 'Инновации',
      description: 'Внедряем современные технологии и методики обучения для максимальной эффективности'
    }
  ];

  return (
    <AboutContainer>
      <div className="container">
        <PageHeader>
          <h1>О платформе «Корочки.есть»</h1>
          <p>
            Мы создаем возможности для профессионального роста и развития 
            через качественное онлайн-образование
          </p>
        </PageHeader>

        <ContentSection>
          <SectionTitle>Наша миссия</SectionTitle>
          <SectionText>
            «Корочки.есть» — это инновационная платформа дополнительного профессионального образования, 
            которая помогает людям получать востребованные навыки и официальные документы, 
            не выходя из дома.
          </SectionText>
          <SectionText>
            Мы верим, что качественное образование должно быть доступным, гибким и ориентированным 
            на практический результат. Наша цель — помочь каждому студенту достичь своих 
            профессиональных целей и реализовать потенциал.
          </SectionText>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Наши ценности</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Команда</SectionTitle>
          <SectionText>
            Наша команда состоит из опытных профессионалов в сфере образования, 
            технологий и менеджмента. Мы объединились, чтобы создать лучшую платформу 
            для онлайн-обучения.
          </SectionText>
          <TeamGrid>
            {teamMembers.map(member => (
              <TeamCard key={member.id}>
                <div className="avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <div className="position">{member.position}</div>
                <p>{member.bio}</p>
              </TeamCard>
            ))}
          </TeamGrid>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Наши достижения</SectionTitle>
          <SectionText>
            За 3 года работы мы помогли более 10,000 студентам получить новые профессии 
            и повысить квалификацию. Наши выпускники работают в ведущих компаниях страны 
            и реализуют успешные проекты.
          </SectionText>
        </ContentSection>
      </div>
    </AboutContainer>
  );
};

export default About;