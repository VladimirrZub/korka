import React, { useState } from 'react';
import styled from 'styled-components';

const ContactsContainer = styled.div`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }
  
  div {
    h3 {
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.text.primary};
    }
    
    p {
      color: ${props => props.theme.colors.text.secondary};
      margin-bottom: 0.25rem;
    }
    
    a {
      color: ${props => props.theme.colors.primary};
      transition: color 0.2s;
      
      &:hover {
        color: ${props => props.theme.colors.primaryDark};
      }
    }
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.sm};
  
  h2 {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text.primary};
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 8px;
    font-family: inherit;
    transition: border-color 0.2s;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background: ${props => props.theme.colors.text.light};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
`;

const MapSection = styled.section`
  margin-top: 3rem;
  
  h2 {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text.primary};
  }
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.background} 0%, ${props => props.theme.colors.surface} 100%);
  height: 400px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.125rem;
  border: 2px dashed ${props => props.theme.colors.border};
`;

const FAQSection = styled.section`
  margin-top: 4rem;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text.primary};
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.sm};
  
  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text.primary};
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqItems = [
    {
      question: 'Как записаться на курс?',
      answer: 'Выберите подходящий курс на странице "Курсы", нажмите "Записаться" и следуйте инструкциям для оформления заявки.'
    },
    {
      question: 'Какие документы я получу после обучения?',
      answer: 'После успешного окончания курса вы получите удостоверение или диплом установленного образца о дополнительном профессиональном образовании.'
    },
    {
      question: 'Можно ли оплатить курс в рассрочку?',
      answer: 'Да, мы предоставляем возможность оплаты в рассрочку на большинство курсов. Подробности уточняйте у наших менеджеров.'
    },
    {
      question: 'Есть ли возможность вернуть деньги?',
      answer: 'Да, мы предоставляем возврат средств в течение 14 дней после начала курса, если обучение не подошло.'
    }
  ];

  return (
    <ContactsContainer>
      <div className="container">
        <PageHeader>
          <h1>Свяжитесь с нами</h1>
          <p>
            Есть вопросы? Мы всегда рады помочь и ответить на все ваши вопросы. 
            Свяжитесь с нами удобным для вас способом.
          </p>
        </PageHeader>

        <ContentGrid>
          <ContactInfo>
            <h2>Контактная информация</h2>
            
            <ContactItem>
              <div className="icon">📞</div>
              <div>
                <h3>Телефон</h3>
                <p>1 (234) 567-89-00</p>
                <p>Бесплатный звонок по России</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">📧</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:info@koro4ki.est">info@korochki.est</a> - общие вопросы</p>
                <p><a href="mailto:support@koro4ki.est">support@korochki.est</a> - техническая поддержка</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">📍</div>
              <div>
                <h3>Адрес</h3>
                <p>Великий Новгород</p>
                <p>Бизнес-центр</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">🕒</div>
              <div>
                <h3>Время работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
              </div>
            </ContactItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <h2>Напишите нам</h2>
            
            <FormGroup>
              <label htmlFor="name">Имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Тема *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Выберите тему</option>
                <option value="course">Вопрос по курсу</option>
                <option value="payment">Оплата и документы</option>
                <option value="technical">Техническая поддержка</option>
                <option value="other">Другое</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Сообщение *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage>
                Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContentGrid>

        <MapSection>
          <h2>Мы на карте</h2>
          <MapPlaceholder>
            🗺️ Интерактивная карта будет здесь
          </MapPlaceholder>
        </MapSection>

        <FAQSection>
          <h2>Частые вопросы</h2>
          <FAQGrid>
            {faqItems.map((item, index) => (
              <FAQItem key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </FAQItem>
            ))}
          </FAQGrid>
        </FAQSection>
      </div>
    </ContactsContainer>
  );
};

export default Contacts;