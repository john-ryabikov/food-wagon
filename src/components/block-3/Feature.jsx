import React from "react"

class Feature extends React.Component {
    render () {
        return (
            <div className="block-3__feature-card feature-card">
                <img className="feature-card__icon" src={this.props.icon} alt="" />
                <p className="feature-card__name">{this.props.name}</p>
                <p className="feature-card__text">{this.props.text}</p>
            </div>
        )
    }
}

export default Feature;