import { useParams, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import logementsData from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import './style.scss'

export default function Logement() {
  const { id } = useParams()
  const logement = logementsData.find((log) => log.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  const [firstName, lastName] = logement.host.name.split(' ')

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement__infos">
        <div className="logement__details">
          <div className="logement__left">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <div className="logement__tags">
              {logement.tags.map((tag) => (
                <span key={tag} className="logement__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="logement__right">
            <div className="logement__host">
              <div className="logement__host-info">
                <p className="logement__host-name">{firstName}</p>
                <p className="logement__host-lastname">{lastName}</p>
              </div>

              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="logement__host-picture"
              />
            </div>
            <div className="logement__rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={i < logement.rating ? 'filled-star' : 'empty-star'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="logement__collapses">
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equip) => (
                <li key={equip}>{equip}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  )
}
