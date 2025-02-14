const Image = ({ imgSrc, className }) => {
  return <img className={`w-full h-full object-cover ${className}`} src={imgSrc} alt={imgSrc} />
}

export default Image

