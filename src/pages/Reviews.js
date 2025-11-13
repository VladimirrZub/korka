import React, { useState } from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
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

const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text.primary};
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ReviewCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const ReviewerInfo = styled.div`
  flex: 1;
  
  h3 {
    margin-bottom: 0.25rem;
    color: ${props => props.theme.colors.text.primary};
  }
  
  .course {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .date {
    color: ${props => props.theme.colors.text.light};
    font-size: 0.875rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  
  .star {
    color: ${props => props.theme.colors.accent};
    font-size: 1.25rem;
  }
`;

const ReviewText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  font-style: italic;
`;

const StatsSection = styled.section`
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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

const AddReviewSection = styled.section`
  background: ${props => props.theme.colors.background};
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  
  h2 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const Reviews = () => {
  const [selectedCourse, setSelectedCourse] = useState('Все');

  const courses = ['Все', 'Программирование', 'Дизайн', 'Маркетинг', 'Менеджмент'];

  const reviews = [
    {
      id: 1,
      name: 'Ирина Козлова',
      course: 'Веб-разработка на React',
      category: 'Программирование',
      rating: 5,
      date: '15.12.2024',
      text: 'Отличный курс! Преподаватели очень подробно объясняют материал, много практических заданий. После окончания курса смогла устроиться на работу frontend-разработчиком.',
      emoji: '👩‍💻'
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      course: 'UX/UI Дизайн',
      category: 'Дизайн',
      rating: 5,
      date: '10.12.2024',
      text: 'Прекрасный курс для начинающих дизайнеров. Все от основ до продвинутых техник. Особенно понравились разборы реальных кейсов и персональные консультации.',
      emoji: '👨‍🎨'
    },
    {
      id: 3,
      name: 'Анна Морозова',
      course: 'Digital-маркетинг',
      category: 'Маркетинг',
      rating: 4,
      date: '05.12.2024',
      text: 'Очень полезный и структурированный курс. Много практических инструментов, которые сразу можно применять в работе. Немного не хватило времени на некоторые темы.',
      emoji: '👩‍💼'
    },
    {
      id: 4,
      name: 'Сергей Петров',
      course: 'Python для анализа данных',
      category: 'Программирование',
      rating: 5,
      date: '28.11.2024',
      text: 'Курс превзошел все ожидания! Отличный баланс теории и практики. Теперь уверенно работаю с данными и даже автоматизировал некоторые процессы на работе.',
      emoji: '👨‍🔬'
    },
    {
      id: 5,
      name: 'Мария Иванова',
      course: 'Project Management',
      category: 'Менеджмент',
      rating: 5,
      date: '20.11.2024',
      text: 'Идеальный курс для тех, кто хочет систематизировать знания в управлении проектами. Очень пригодились шаблоны документов и методики планирования.',
      emoji: '👩‍💼'
    },
    {
      id: 6,
      name: 'Алексей Кузнецов',
      course: 'Мобильная разработка iOS',
      category: 'Программирование',
      rating: 4,
      date: '15.11.2024',
      text: 'Хороший интенсивный курс. Много практики, интересные проекты. Преподаватель всегда на связи и помогает с сложными моментами. Рекомендую!',
      emoji: '👨‍💻'
    }
  ];

  const filteredReviews = selectedCourse === 'Все' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCourse);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <ReviewsContainer>
      <div className="container">
        <PageHeader>
          <h1>Отзывы наших студентов</h1>
          <p>
            Узнайте, что говорят выпускники о наших курсах и их опыте обучения 
            на платформе «Корочки.есть»
          </p>
        </PageHeader>

        <StatsSection>
          <h2>Нам доверяют</h2>
          <StatsGrid>
            <StatItem>
              <h3>4.9/5</h3>
              <p>Средняя оценка</p>
            </StatItem>
            <StatItem>
              <h3>2,500+</h3>
              <p>Отзывов</p>
            </StatItem>
            <StatItem>
              <h3>95%</h3>
              <p>Рекомендуют нас</p>
            </StatItem>
            <StatItem>
              <h3>10,000+</h3>
              <p>Выпускников</p>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <Filters>
          {courses.map(course => (
            <FilterButton
              key={course}
              active={selectedCourse === course}
              onClick={() => setSelectedCourse(course)}
            >
              {course}
            </FilterButton>
          ))}
        </Filters>

        <ReviewsGrid>
          {filteredReviews.map(review => (
            <ReviewCard key={review.id}>
              <ReviewHeader>
                <Avatar>{review.emoji}</Avatar>
                <ReviewerInfo>
                  <h3>{review.name}</h3>
                  <div className="course">{review.course}</div>
                  <div className="date">{review.date}</div>
                </ReviewerInfo>
                <Rating>
                  <div className="star">{renderStars(review.rating)}</div>
                </Rating>
              </ReviewHeader>
              <ReviewText>"{review.text}"</ReviewText>
            </ReviewCard>
          ))}
        </ReviewsGrid>

        <AddReviewSection>
          <h2>Хотите поделиться своим опытом?</h2>
          <p>
            Расскажите о своих впечатлениях от обучения и помогите другим 
            сделать правильный выбор
          </p>
          <CTAButton>Оставить отзыв</CTAButton>
        </AddReviewSection>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;