import Banner from '../../components/Banner'
import Card from '../../components/Card'
import imageAccueil from '../../assets/falaises_accueil.svg'
import logementsData from '../../data/logements.json'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Accueil() {
  return (
    <div className="accueil">
      <Banner image={imageAccueil} text="Chez vous, partout et ailleurs" />

      <section className="accueil__grid">
        {logementsData.map((logement) => (
          <Link
            to={`/logement/${logement.id}`}
            key={logement.id}
            className="accueil__link"
          >
            <Card title={logement.title} image={logement.cover} />
          </Link>
        ))}
      </section>
    </div>
  )
}
