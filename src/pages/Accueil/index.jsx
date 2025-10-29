import Banner from '../../components/Banner'
import Card from '../../components/Card'
import imageAccueil from '../../assets/falaises_accueil.svg'
import './style.scss'

export default function Accueil() {
  const logements = [
    { id: 1, title: 'Titre de la location 1', image: '/images/img1.jpg' },
    { id: 2, title: 'Titre de la location 2', image: '/images/img2.jpg' },
    { id: 3, title: 'Titre de la location 3', image: '/images/img3.jpg' },
    { id: 4, title: 'Titre de la location 4', image: '/images/img4.jpg' },
    { id: 5, title: 'Titre de la location 5', image: '/images/img5.jpg' },
    { id: 6, title: 'Titre de la location 6', image: '/images/img6.jpg' },
  ]

  return (
    <div className="accueil">
      <Banner image={imageAccueil} text="Chez vous, partout et ailleurs" />

      <section className="accueil__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            image={logement.image}
          />
        ))}
      </section>
    </div>
  )
}
