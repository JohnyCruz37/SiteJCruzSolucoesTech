import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';

import NavBar from './Components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import SobreMim from './pages/sobreMim/SobreMim';
import Servicos from './pages/servicos/Servicos';
import Desenvolvimento from './pages/desenvolvimento/Desenvolvimento';
import Contato from './pages/contato/Contato';
import Footer from './Components/footer/Footer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage/> } />
          <Route path="/sobre-mim" element={<SobreMim/> } />
          <Route path="/servicos" element={<Servicos/> } />
          <Route path="/desenvolvimento" element={<Desenvolvimento/> } />
          <Route path="/contato" element={<Contato/> } />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
      <Footer/>
    </Router>
  );
}

export default App;

