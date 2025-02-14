import ContactForm from "../ContactForm/ContactForm"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FlyerProject = ({}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  }
  const banners = ["https://grupoproaco.com/images/headers/company.jpg"]
  return (
    <div className="w-full flex flex-wrap justify-end items-center relative h-[40vh] lg:h-[100vh]">
      <Slider className="w-full h-full" {...settings}>
        {banners?.map((banner, index) => (
          <div key={index} className="w-full h-full">
            <div
              className=""
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                filter: "brightness(0.3)",
              }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="absolute z-10 mx-8 flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  )
}

export default FlyerProject

