import { useState, useRef, useEffect } from 'react'
import imgArrow from '../../assets/arrow.svg'
import './style.scss'

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  // Met à jour la hauteur du contenu pour l'animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="collapse">
      <div className="collapse__header">
        <h3 className="collapse__title">{title}</h3>
        <button
          className={`collapse__toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer' : 'Ouvrir'}
        >
          <img src={imgArrow} alt="flèche de déroulement du menu" />
        </button>
      </div>

      <div
        className="collapse__content-wrapper"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className="collapse__content">
          {children}
        </div>
      </div>
    </div>
  )
}
