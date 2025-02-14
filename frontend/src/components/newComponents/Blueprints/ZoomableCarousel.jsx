"use client"
import { useState, useRef } from "react"
import Swipe from "react-easy-swipe"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { MdFullscreenExit } from "react-icons/md"
import screenfull from "screenfull"
import styles from "./ZoomableCarousel.module.css"

const ZoomableCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768
  const hasMultipleSlides = images.length > 1

  const handlePrevious = () => {
    if (isMobile && hasMultipleSlides) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (isMobile && hasMultipleSlides) {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    } else if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(containerRef.current)
      setIsFullscreen(!isFullscreen)
    }
  }

  const handleSwipeLeft = () => {
    if (isMobile) {
      handleNext()
    } else {
      if (currentIndex < images.length - 3) {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }

  const handleSwipeRight = () => {
    if (isMobile) {
      handlePrevious()
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  // Solo mostrar flechas en móvil si hay múltiples slides
  const showArrows = !isMobile || (isMobile && hasMultipleSlides)
  
  // En desktop, mostrar flechas según la disponibilidad de slides
  const hasNextSlide = isMobile 
    ? hasMultipleSlides
    : currentIndex < images.length - 3

  const hasPreviousSlide = isMobile 
    ? hasMultipleSlides
    : currentIndex > 0

  return (
    <div ref={containerRef} className={`${styles.carouselContainer} ${isFullscreen ? styles.fullscreen : ""}`}>
      <Swipe onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight} className={styles.swipe}>
        <div className={styles.slidesContainer}>
          <div
            className={styles.slidesTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className={styles.slide} onClick={toggleFullscreen}>
                <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className={styles.image} />
                {isFullscreen && (
                  <button onClick={toggleFullscreen} className={styles.fullscreenButton}>
                    <MdFullscreenExit />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Swipe>

      {!isFullscreen && showArrows && (
        <>
          {hasPreviousSlide && (
            <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrevious}>
              <FaChevronLeft />
            </button>
          )}
          {hasNextSlide && (
            <button className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>
              <FaChevronRight />
            </button>
          )}
          <div className={styles.indicators}>
            {Array.from({ length: isMobile ? images.length : images.length - 2 }).map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ZoomableCarousel