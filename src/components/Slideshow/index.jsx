import { useState } from 'react'
import leftArrow from '../../assets/left_arrow.svg'
import rightArrow from '../../assets/right_arrow.svg'
import './style.scss'

export default function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = pictures.length > 1

  const next = () => setIndex((i) => (i + 1) % pictures.length)
  const prev = () =>
    setIndex((i) => (i - 1 + pictures.length) % pictures.length)

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`slide-${index}`}
        className="slideshow__image"
      />

      {hasMultiple && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow-left"
            onClick={prev}
          >
            <img src={leftArrow} alt="Précédent" />
          </button>
          <button
            className="slideshow__arrow slideshow__arrow-right"
            onClick={next}
          >
            <img src={rightArrow} alt="Suivant" />
          </button>
          <div className="slideshow__counter">
            {index + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  )
}
