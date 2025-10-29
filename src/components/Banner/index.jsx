import './style.scss'

export default function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="banner__text">{text}</h1>
    </div>
  )
}
