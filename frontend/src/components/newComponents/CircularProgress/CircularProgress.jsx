import PropTypes from "prop-types"
import "./CircularProgress.css"

const CircularProgress = ({ percentage, label }) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="circular-progress">
      <svg width="120" height="120">
        <circle className="circular-progress-background" cx="60" cy="60" r="50" strokeWidth="10" />
        <circle
          className="circular-progress-bar"
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circular-progress-text flex flex-wrap justify-center items-center">
        <span className="w-full text-2xl poppins-light">{`${percentage}%`}</span>
        <span className="text-md text-gray-300 poppins-semibold">{label}</span>
      </div>
    </div>
  )
}

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

export default CircularProgress

