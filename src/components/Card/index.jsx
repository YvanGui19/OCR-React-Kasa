import './style.scss'

export default function Card({ title, image }) {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="card__title">{title}</p>
    </div>
  )
}
