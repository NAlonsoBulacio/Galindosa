import ZoomableCarousel from "./ZoomableCarousel"

const Blueprints = ({ blueprints }) => {
  return (
    <div className="w-full pb-6 lg:pb-4 mb-8 space-y-10 py-8 px-2 lg:px-32">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">Planos</h1>
      <ZoomableCarousel images={blueprints} />
    </div>
  )
}

export default Blueprints

