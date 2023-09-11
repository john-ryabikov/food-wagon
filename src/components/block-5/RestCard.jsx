import React from "react"
import Labels from './Labels.jsx'
import RestInfo from './RestInfo.jsx'

class RestCard extends React.Component {

    card = this.props.card

    render () {
        return (
            <div className="rest-row__rest-card rest-card">
                <Labels  percent={this.card.percent}  clock={this.card.clock} />
                <img className="rest-card__img" src={this.card.img} alt="" />
                <RestInfo icon={this.card.icon} title={this.card.title} rate={this.card.rate} />
                {this.card.status ? <p className="rest-card__status">Open tomorrow</p> : <p className="rest-card__status-green">Open now</p>}
            </div>
        )
    }    
}

export default RestCard;