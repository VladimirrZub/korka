import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;