import { IoIosArrowDropleftCircle } from "react-icons/io"

const SamplePrevArrow = (props) => {
  const { onClick, amenities } = props
  return (
    <div
      className={`${amenities ? "text-gray-800 " : "text-white "} rounded-full bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-6`}
      onClick={onClick}
    >
      <span className="text-2xl lg:text-4xl hover:scale-110 duration-300">
        <IoIosArrowDropleftCircle />
      </span>
    </div>
  )
}

export default SamplePrevArrow

