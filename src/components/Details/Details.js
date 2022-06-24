import "./Details.css"
import ellipse from "./Ellipse.png"
import Card from "../Card/Card"

const Details = () => {
    return (
        <div className="Details">
            <div className="titleBox">
                <div className="titleH">
                    <h2 className="titleHeading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, non!</h2>
                    <p className="titlePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos provident veritatis enim esse rem excepturi sunt repellat maxime! Recusandae voluptates quas sapiente laudantium molestias harum fuga! Quia vel ea nihil, modi quas asperiores earum nobis minus exercitationem aperiam obcaecati nesciunt ab aliquam quibusdam, eum eveniet dolorem veniam provident ullam!</p>
                </div>
                <div className="titleBtn">
                    <button className="btn1">COMUNIDADE NO DISCORD</button>
                    <button className="btn2">ACCESS O DESAFIO</button>
                </div>
            </div>
            <div className="founder">
                    <div className="founderImg">
                        <img src={ellipse} alt="" />
                    </div>
                    <div className="founderDetails">
                        <h2>Diego Fernandez</h2>
                        <p>Co-founder</p>
                    </div>
                </div>

                <div className="Card">
                    <Card />
                    <Card />
                </div>
        </div>
    )
}

export default Details