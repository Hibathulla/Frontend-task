import Details from "../Details/Details"
import image from "./image.png"
import "./Left.css"

const Left = () => {
  return (
    <div className="leftImage">
        <img className="image" src={image} alt="pic" />
        <Details />
    </div>
  )
}

export default Left