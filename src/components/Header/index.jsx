import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_header.svg'
import './style.scss'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de l'entreprise" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/APropos"
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}
