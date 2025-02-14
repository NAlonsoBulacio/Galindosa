import FeaturedCard from "../FeaturedCard/FeaturedCard"
import { barrio_norte } from "../../../assets"
const FeaturedProperties = () => {
  const properties = [
    {
      image:
        "https://res.cloudinary.com/dqriuc2m1/image/upload/f_auto,q_auto:low//v1727354941/heooklysinjdhb0dzsuq.webp",
      title: "Barrio Sur",
      description: "Edificios ubicados en Barrio Sur",
    },
    {
      image:
        "https://res.cloudinary.com/dqriuc2m1/image/upload/f_auto,q_auto:low//v1728999501/gm2d2nhbpxjiorzcnehi.webp",
      title: "Mate de Luna",
      description: "Edificios ubicados en Mate de Luna",
    },
    {
      image: barrio_norte,
      title: "Barrio Norte",
      description: "Edificios ubicados en Barrio Norte",
    },
  ]

  return (
    <div className="overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <h1 className="poppins-regular text-4xl text-gray-700 text-center lg:text-left">
          Proyectos <span className="poppins-bold text-[#ffc702]">Por Ubicación</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#ffc702] mt-2" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-8 overflow-hidden">
        {properties.map((property, index) => (
          <FeaturedCard key={index} image={property.image} title={property.title} description={property.description} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProperties

