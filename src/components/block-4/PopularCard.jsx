import React from "react"
import marker from "../../img/header/map-marker-alt.svg"

class PopularCard extends React.Component {
    render () {
        return (
            <div className="block-4__popular-card popular-card">
                <img className="popular-card__img" src={this.props.img} alt="" />
                <p className="popular-card__name">{this.props.name}</p>
                <div className="popular-card__location">
                    <img className="popular-card__location-marker" src={marker} alt="" />
                    <p className="popular-card__location-p">{this.props.location}</p>
                </div>
                <p className="popular-card__price">${this.props.price}</p>
                <button className="popular-card__btn">Order Now</button>
            </div>
        )
    }
}

export default PopularCard;