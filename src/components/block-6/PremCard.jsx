import React from 'react'

export class PremCard extends React.Component {

    card = this.props.card

    render() {
        return (
            <div className="prems__prem-card">
                <img className="prems__prem-img" src={this.card.img} alt="" />
                <p className="prems__prem-cont">{this.card.word_1}<br/>{this.card.word_2}</p>
            </div>
        )
    }
}

export default PremCard
