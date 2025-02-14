import "./FeaturedCard.css"
import { useHistory } from "react-router-dom"
const FeaturedCard = ({ image, title, description }) => {
  const history = useHistory()
  const handleSearch = (zona) => {
    if (title === "Mate de Luna") {
      history.push("/proyecto/g-park")
    } else {
      history.push("/proyectos", { zona })
    }
  }

  return (
    <div className="card-container cursor-pointer" onClick={() => handleSearch(title)}>
      <div className="card">
        <div className="card-front">
          <img src={image} alt={title} className="card-image" />
          <div className="card-title">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="card-back">
          <img src={image} alt={title} className="card-image-dark" />
          <div className="card-description">
            <h3 className="poppins-semibold text-3xl">{title}</h3>
            <p className="text-gray-200 poppins-light">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard

