import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4 border-top border-body">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Menu</h5>
            <ul className="lista-menu">
              <li><Link className="menu-item active" to="/">Home</Link></li>
              <li><Link className="menu-item" to="/sobre-mim">Sobre Mim</Link></li>
              <li><Link className="menu-item" to="/servicos">Serviços</Link></li>
              <li><Link className="menu-item" to="/contato">Contato</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3"><a className="text-white" href="https://www.facebook.com/jcruzsolucoestech/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
              <li className="me-3"><a className="text-white" href="https://www.instagram.com/jcruz_solucoes_tech/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
              <li className="me-3"><a className="text-white" href="https://www.linkedin.com/in/jcruz-solucoes-tech/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
            </ul>
          </div>
          <div className="col-md-4 text-md-end">
            <h5>JCruz Soluções Tech</h5>
            <p>&copy; {new Date().getFullYear()} JCruz Soluções Tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}