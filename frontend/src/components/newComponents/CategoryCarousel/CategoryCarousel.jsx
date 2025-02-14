import Slider from "react-slick"
import { bg_yellow } from "../../../assets"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SampleNextArrow from "../../Arrows/SampleNextArrow"
import SamplePrevArrow from "../../Arrows/SamplePrevArrow"

const categories = [
  { icon: "https://grupoproaco.com/images/icons/locales.png", label: "Cocheras" },
  { icon: "https://grupoproaco.com/images/icons/lotes.png", label: "Parking" },
  { icon: "https://grupoproaco.com/images/icons/parking.png", label: "Departamentos" },
  { icon: "https://grupoproaco.com/images/icons/lotes.png", label: "Parking" },
  { icon: "https://grupoproaco.com/images/icons/parking.png", label: "Departamentos" },
  { icon: "https://grupoproaco.com/images/icons/oficinas.png", label: "Lotes" },
]

const CategoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div
      className="relative bg-cover bg-center text-white py-8 lg:py-10 lg:px-32"
      style={{ backgroundImage: `url(${bg_yellow})` }}
    >
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8 text-balance">
        Explore propiedades <span className="font-bold">por categoría</span>
      </h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4">
            <div className="p-4 lg:p-6 rounded-lg shadow-lg text-center">
              <img src={category.icon} alt={category.label} className="mx-auto mb-4 w-16 h-16" />
              <div className="text-xl font-medium">{category.label}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategoryCarousel

