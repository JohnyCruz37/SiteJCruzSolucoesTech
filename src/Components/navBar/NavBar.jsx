import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'; 
import "./NavBar.css"; 
import useActiveLink from '../../utils/linkSelecionado';

export default function NavBar() {
  useActiveLink();
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand link-logo" to="/">
          <img src={logo} alt="logo JCruz Soluções Tech" className="img-logo-navbar" />
          JCruz Soluções Tech
        </Link>
        {/* Botão para abrir o offcanvas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto menu-lista">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-mim">Sobre nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicos">Serviços</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desenvolvimento">Desenvolvimento</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
