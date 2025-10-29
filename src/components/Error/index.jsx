import { Link } from 'react-router-dom'
import './style.scss'
import errorPicture from '../../assets/404.svg'

export default function Error() {
  return (
    <div className="error">
      <img src={errorPicture} alt="error 404" className="error__logo" />
      <p className="error__text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
