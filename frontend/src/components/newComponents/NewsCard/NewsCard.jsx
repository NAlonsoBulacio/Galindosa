import { IoIosArrowForward } from "react-icons/io"

const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col md:flex-row mb-8">
      <div className="md:w-1/3">
        <div className="relative">
          <img src={news.image} alt={news.title} className="w-full h-48 md:h-full object-cover rounded-md " />
          <span className="absolute bottom-4 left-4 bg-black text-white text-sm px-2 py-1 rounded">
            {news.category}
          </span>
        </div>
      </div>
      <div className="md:w-2/3 md:pl-6 flex flex-col justify-between">
        <div>
          <span className="block text-gray-500 mb-2">{news.date}</span>
          <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
          <p className="text-gray-700">{news.fullText}</p>
        </div>
        <a href={news.link} className="text-blue-500 flex items-center mt-4">
          Leer más <IoIosArrowForward className="ml-1" />
        </a>
      </div>
    </div>
  )
}

export default NewsCard

