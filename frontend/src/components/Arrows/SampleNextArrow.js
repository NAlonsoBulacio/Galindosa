import { IoIosArrowDroprightCircle } from "react-icons/io"

const SampleNextArrow = (props) => {
  const { onClick, amenities } = props
  return (
    <div
      className={`${amenities ? "text-gray-800 " : "text-white "} rounded-full bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-6`}
      onClick={onClick}
    >
      <span className="text-4xl hover:scale-110 duration-300">
        <IoIosArrowDroprightCircle />
      </span>
    </div>
  )
}

export default SampleNextArrow

