import logo from '../../assets/logo_footer.svg'
import './style.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de l'entreprise" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
