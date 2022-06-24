import RightCard from "../RightCard/RightCard"
import "./Right.css"

const Right = () => {
  return (
    <div className="right">
        <div className="rightHeading">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="rightCards">
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
        </div>
    </div>
  )
}

export default Right