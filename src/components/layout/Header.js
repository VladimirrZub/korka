import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.lg};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.08) 40%,
      rgba(0, 0, 0, 0.03) 70%,
      transparent 100%
    );
    pointer-events: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;

  &.primary {
    background: ${props => props.theme.colors.primary};
    color: white;

    &:hover {
      background: ${props => props.theme.colors.primaryDark};
    }
  }

  &.outline {
    background: transparent;
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.primary};

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.lg};
  padding: 1rem;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: ${props => props.open ? 'flex' : 'none'};
  }
`;

const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo to="/" onClick={() => setMobileMenuOpen(false)}>
            Корочки.есть
          </Logo>
          
          <NavLinks>
            <NavLink to="/courses">Курсы</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/reviews">Отзывы</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </NavLinks>

          <AuthButtons>
            <Button className="outline">Войти</Button>
            <Button className="primary">Регистрация</Button>
          </AuthButtons>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </MobileMenuButton>
        </Nav>

        <MobileMenu open={mobileMenuOpen}>
          <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>Курсы</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>О нас</NavLink>
          <NavLink to="/reviews" onClick={() => setMobileMenuOpen(false)}>Отзывы</NavLink>
          <NavLink to="/contacts" onClick={() => setMobileMenuOpen(false)}>Контакты</NavLink>
          
          <MobileAuthButtons>
            <Button className="outline" style={{width: '100%'}}>Войти</Button>
            <Button className="primary" style={{width: '100%'}}>Регистрация</Button>
          </MobileAuthButtons>
        </MobileMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;