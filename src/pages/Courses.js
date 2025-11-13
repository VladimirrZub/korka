import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { LoadMoreLoader } from '../components/common/Loader';

const CoursesContainer = styled.div`
  padding: 2rem 0;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.125rem;
  }
`;

const ResultsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  .count {
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 500;
  }
  
  .showing {
    color: ${props => props.theme.colors.text.primary};
    font-weight: 600;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text.primary};
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const CourseCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s, box-shadow 0.2s;
  opacity: ${props => props.fadeIn ? 0 : 1};
  animation: ${props => props.fadeIn ? 'fadeIn 0.5s ease-in forwards' : 'none'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background: ${props => {
    switch (props.category) {
      case 'Программирование':
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
      case 'Дизайн':
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
      case 'Маркетинг':
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
      case 'Менеджмент':
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
      case 'Аналитика':
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
      default:
        return `linear-gradient(135deg, #111827 0%, #6B7280 100%)`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  
  .difficulty {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    backdrop-filter: blur(10px);
  }
`;

const CourseContent = styled.div`
  padding: 1.5rem;
`;

const CourseCategory = styled.span`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const CourseTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  line-height: 1.4;
`;

const CourseDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const CoursePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .original-price {
    font-size: 1rem;
    color: ${props => props.theme.colors.text.light};
    text-decoration: line-through;
  }
  
  .discount {
    background: ${props => props.theme.colors.accent};
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${props => props.theme.colors.text.secondary};
  
  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

const allCourses = [
  
  {
    id: 1,
    title: 'Веб-разработка на React',
    category: 'Программирование',
    description: 'Освойте современную фронтенд-разработку с использованием React, Redux и современных инструментов',
    duration: '3 месяца',
    students: 1250,
    price: 29900,
    originalPrice: 39900,
    level: 'Начальный',
    emoji: '⚛️'
  },
  {
    id: 2,
    title: 'Python для анализа данных',
    category: 'Программирование',
    description: 'Изучите Python и библиотеки для анализа данных: Pandas, NumPy, Matplotlib и Scikit-learn',
    duration: '4 месяца',
    students: 2100,
    price: 31900,
    originalPrice: 41900,
    level: 'Средний',
    emoji: '🐍'
  },
  {
    id: 3,
    title: 'Мобильная разработка iOS',
    category: 'Программирование',
    description: 'Создание приложений для iOS на Swift с нуля до публикации в App Store',
    duration: '4 месяца',
    students: 630,
    price: 38900,
    originalPrice: 48900,
    level: 'Продвинутый',
    emoji: '📱'
  },
  {
    id: 4,
    title: 'Fullstack JavaScript',
    category: 'Программирование',
    description: 'Полный курс по JavaScript: от основ до создания полноценных веб-приложений',
    duration: '5 месяцев',
    students: 1800,
    price: 34900,
    originalPrice: 44900,
    level: 'Средний',
    emoji: '🌐'
  },
  {
    id: 5,
    title: 'Java для enterprise',
    category: 'Программирование',
    description: 'Разработка корпоративных приложений на Java Spring Framework',
    duration: '6 месяцев',
    students: 950,
    price: 41900,
    originalPrice: 51900,
    level: 'Продвинутый',
    emoji: '☕'
  },
  {
    id: 6,
    title: 'Frontend с Vue.js',
    category: 'Программирование',
    description: 'Современная фронтенд-разработка с Vue 3, Composition API и экосистемой',
    duration: '3 месяца',
    students: 870,
    price: 27900,
    originalPrice: 37900,
    level: 'Начальный',
    emoji: '🟢'
  },
  {
    id: 7,
    title: 'Backend с Node.js',
    category: 'Программирование',
    description: 'Создание серверных приложений на Node.js с Express и MongoDB',
    duration: '4 месяца',
    students: 1100,
    price: 32900,
    originalPrice: 42900,
    level: 'Средний',
    emoji: '⚙️'
  },
  {
    id: 8,
    title: 'DevOps и Docker',
    category: 'Программирование',
    description: 'Автоматизация развертывания и управление инфраструктурой',
    duration: '3 месяца',
    students: 720,
    price: 36900,
    originalPrice: 46900,
    level: 'Продвинутый',
    emoji: '🐳'
  },
  {
    id: 9,
    title: 'Тестирование ПО',
    category: 'Программирование',
    description: 'Автоматизированное тестирование веб и мобильных приложений',
    duration: '2 месяца',
    students: 540,
    price: 24900,
    originalPrice: 34900,
    level: 'Начальный',
    emoji: '🧪'
  },
  {
    id: 10,
    title: 'Game Development',
    category: 'Программирование',
    description: 'Разработка игр на Unity и C# для разных платформ',
    duration: '5 месяцев',
    students: 680,
    price: 38900,
    originalPrice: 48900,
    level: 'Средний',
    emoji: '🎮'
  },

 
  {
    id: 11,
    title: 'UX/UI Дизайн',
    category: 'Дизайн',
    description: 'Научитесь создавать интуитивные и красивые интерфейсы для веб и мобильных приложений',
    duration: '4 месяца',
    students: 890,
    price: 34900,
    originalPrice: 44900,
    level: 'Начальный',
    emoji: '🎨'
  },
  {
    id: 12,
    title: 'Графический дизайн',
    category: 'Дизайн',
    description: 'Освойте Adobe Photoshop, Illustrator и создавайте профессиональные дизайны',
    duration: '3 месяца',
    students: 1250,
    price: 29900,
    originalPrice: 39900,
    level: 'Начальный',
    emoji: '✏️'
  },
  {
    id: 13,
    title: 'Motion Design',
    category: 'Дизайн',
    description: 'Создание анимации и визуальных эффектов в After Effects',
    duration: '4 месяца',
    students: 480,
    price: 37900,
    originalPrice: 47900,
    level: 'Средний',
    emoji: '🎬'
  },
  {
    id: 14,
    title: '3D моделирование',
    category: 'Дизайн',
    description: 'Основы 3D моделирования в Blender для начинающих',
    duration: '5 месяцев',
    students: 320,
    price: 41900,
    originalPrice: 51900,
    level: 'Продвинутый',
    emoji: '🔄'
  },
  {
    id: 15,
    title: 'Product Design',
    category: 'Дизайн',
    description: 'Полный цикл проектирования digital-продуктов',
    duration: '6 месяцев',
    students: 290,
    price: 45900,
    originalPrice: 55900,
    level: 'Продвинутый',
    emoji: '📐'
  },
  {
    id: 16,
    title: 'Бренд-дизайн',
    category: 'Дизайн',
    description: 'Создание айдентики и фирменного стиля для компаний',
    duration: '3 месяца',
    students: 410,
    price: 32900,
    originalPrice: 42900,
    level: 'Средний',
    emoji: '🏷️'
  },

  
  {
    id: 17,
    title: 'Digital-маркетинг',
    category: 'Маркетинг',
    description: 'Полный курс по digital-маркетингу: SMM, контекстная реклама, SEO и аналитика',
    duration: '2 месяца',
    students: 1560,
    price: 25900,
    originalPrice: 35900,
    level: 'Средний',
    emoji: '📊'
  },
  {
    id: 18,
    title: 'SMM Продвижение',
    category: 'Маркетинг',
    description: 'Эффективное продвижение в социальных сетях: Instagram, VK, Telegram',
    duration: '2 месяца',
    students: 1340,
    price: 22900,
    originalPrice: 32900,
    level: 'Начальный',
    emoji: '📱'
  },
  {
    id: 19,
    title: 'SEO Оптимизация',
    category: 'Маркетинг',
    description: 'Продвижение сайтов в поисковых системах Яндекс и Google',
    duration: '3 месяца',
    students: 980,
    price: 28900,
    originalPrice: 38900,
    level: 'Средний',
    emoji: '🔍'
  },
  {
    id: 20,
    title: 'Контент-маркетинг',
    category: 'Маркетинг',
    description: 'Создание и продвижение контента для привлечения клиентов',
    duration: '2 месяца',
    students: 760,
    price: 24900,
    originalPrice: 34900,
    level: 'Начальный',
    emoji: '✍️'
  },
  {
    id: 21,
    title: 'Email-маркетинг',
    category: 'Маркетинг',
    description: 'Автоматизация email-рассылок и повышение конверсии',
    duration: '1 месяц',
    students: 520,
    price: 19900,
    originalPrice: 29900,
    level: 'Начальный',
    emoji: '📧'
  },
  {
    id: 22,
    title: 'Performance Marketing',
    category: 'Маркетинг',
    description: 'Работа с performance-каналами и оптимизация рекламных бюджетов',
    duration: '3 месяца',
    students: 430,
    price: 33900,
    originalPrice: 43900,
    level: 'Продвинутый',
    emoji: '🎯'
  },

  {
    id: 23,
    title: 'Project Management',
    category: 'Менеджмент',
    description: 'Управление проектами по методологии Agile, Scrum и классическим подходам',
    duration: '2 месяца',
    students: 740,
    price: 27900,
    originalPrice: 37900,
    level: 'Средний',
    emoji: '👔'
  },
  {
    id: 24,
    title: 'Product Management',
    category: 'Менеджмент',
    description: 'Управление digital-продуктами от идеи до запуска и развития',
    duration: '4 месяца',
    students: 380,
    price: 35900,
    originalPrice: 45900,
    level: 'Продвинутый',
    emoji: '📈'
  },
  {
    id: 25,
    title: 'HR Management',
    category: 'Менеджмент',
    description: 'Современные подходы к управлению персоналом в IT-компаниях',
    duration: '3 месяца',
    students: 290,
    price: 29900,
    originalPrice: 39900,
    level: 'Средний',
    emoji: '👥'
  },
  {
    id: 26,
    title: 'Team Leadership',
    category: 'Менеджмент',
    description: 'Развитие лидерских качеств и управление командами разработки',
    duration: '2 месяца',
    students: 210,
    price: 31900,
    originalPrice: 41900,
    level: 'Продвинутый',
    emoji: '🌟'
  },


  {
    id: 27,
    title: 'Data Analytics',
    category: 'Аналитика',
    description: 'Анализ данных с помощью SQL, Python и визуализация в Tableau',
    duration: '4 месяца',
    students: 670,
    price: 34900,
    originalPrice: 44900,
    level: 'Средний',
    emoji: '📈'
  },
  {
    id: 28,
    title: 'Web Analytics',
    category: 'Аналитика',
    description: 'Настройка и анализ веб-метрик в Google Analytics и Яндекс.Метрика',
    duration: '2 месяца',
    students: 540,
    price: 26900,
    originalPrice: 36900,
    level: 'Начальный',
    emoji: '🌐'
  },
  {
    id: 29,
    title: 'Business Intelligence',
    category: 'Аналитика',
    description: 'Построение систем бизнес-аналитики и дашбордов',
    duration: '3 месяца',
    students: 320,
    price: 38900,
    originalPrice: 48900,
    level: 'Продвинутый',
    emoji: '💡'
  },
  {
    id: 30,
    title: 'Machine Learning Basics',
    category: 'Аналитика',
    description: 'Введение в машинное обучение для анализа данных',
    duration: '5 месяцев',
    students: 480,
    price: 41900,
    originalPrice: 51900,
    level: 'Продвинутый',
    emoji: '🤖'
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Все', 'Программирование', 'Дизайн', 'Маркетинг', 'Менеджмент', 'Аналитика'];

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const {
    visibleItems: visibleCourses,
    loadMoreRef,
    loading,
    hasMore,
    loadedCount,
    totalCount
  } = useInfiniteScroll(filteredCourses, 9);  

  const getCategoryEmoji = (category) => {
    const emojis = {
      'Программирование': '💻',
      'Дизайн': '🎨',
      'Маркетинг': '📊',
      'Менеджмент': '👔',
      'Аналитика': '📈'
    };
    return emojis[category] || '📚';
  };

  const calculateDiscount = (price, originalPrice) => {
    return Math.round((1 - price / originalPrice) * 100);
  };

  return (
    <CoursesContainer>
      <div className="container">
        <PageHeader>
          <h1>Все курсы</h1>
          <p>Выберите подходящий курс и начните свой путь к новой профессии</p>
        </PageHeader>

        <Filters>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </Filters>

        <SearchInput
          type="text"
          placeholder="Поиск курсов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <ResultsInfo>
          <div className="count">
            Найдено курсов: <span className="showing">{filteredCourses.length}</span>
          </div>
          <div className="count">
            Показано: <span className="showing">{loadedCount}</span> из {totalCount}
          </div>
        </ResultsInfo>

        {filteredCourses.length === 0 ? (
          <NoResults>
            <div className="icon">🔍</div>
            <h3>Курсы не найдены</h3>
            <p>Попробуйте изменить параметры поиска или выбрать другую категорию</p>
          </NoResults>
        ) : (
          <>
            <CoursesGrid>
              {visibleCourses.map((course, index) => (
                <CourseCard key={course.id} fadeIn={index >= 9}>
                  <CourseImage category={course.category}>
                    <div className="emoji">{course.emoji}</div>
                  </CourseImage>
                  <CourseContent>
                    <CourseCategory>
                      {getCategoryEmoji(course.category)} {course.category}
                    </CourseCategory>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseDescription>{course.description}</CourseDescription>
                    
                    <CourseMeta>
                      <div className="meta-item">
                        🕒 {course.duration}
                      </div>
                      <div className="meta-item">
                        👥 {course.students.toLocaleString()}
                      </div>
                      <div className="meta-item">
                        📊 {course.level}
                      </div>
                    </CourseMeta>
                    
                    <CoursePrice>
                      {course.price.toLocaleString()} ₽
                      {course.originalPrice > course.price && (
                        <>
                          <span className="original-price">
                            {course.originalPrice.toLocaleString()} ₽
                          </span>
                          <span className="discount">
                            -{calculateDiscount(course.price, course.originalPrice)}%
                          </span>
                        </>
                      )}
                    </CoursePrice>
                    <EnrollButton>Записаться на курс</EnrollButton>
                  </CourseContent>
                </CourseCard>
              ))}
            </CoursesGrid>

            {loading && <LoadMoreLoader />}

            {hasMore && !loading && (
              <div ref={loadMoreRef} style={{ height: '1px' }} />
            )}

            {!hasMore && filteredCourses.length > 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#64748B' }}>
                Все курсы загружены
              </div>
            )}
          </>
        )}
      </div>
    </CoursesContainer>
  );
};

export default Courses;