import React from "react"
import RestCard from "./RestCard.jsx"

class RestRow extends React.Component {

    row = this.props.row

    cards = [
        {
            id: 1,
            img: this.row.imgs[0],
            icon: this.row.icons[0],
            percent: this.row.percents[0],
            clock: "Fast",
            title: this.row.titles[0],
            rate: this.row.rates[0],
            status: this.row.statuses[0]
        },
        {
            id: 2,
            img: this.row.imgs[1],
            icon: this.row.icons[1],
            percent: this.row.percents[1],
            clock: "Fast",
            title: this.row.titles[1],
            rate: this.row.rates[1],
            status: this.row.statuses[1]
        },
        {
            id: 3,
            img: this.row.imgs[2],
            icon: this.row.icons[2],
            percent: this.row.percents[2],
            clock: "Fast",
            title: this.row.titles[2],
            rate: this.row.rates[2],
            status: this.row.statuses[2]
        },
        {
            id: 4,
            img: this.row.imgs[3],
            icon: this.row.icons[3],
            percent: this.row.percents[3],
            clock: "Fast",
            title: this.row.titles[3],
            rate: this.row.rates[3],
            status: this.row.statuses[3]
        }
    ]

    render () {
        return (
            <div className="block-5__rest-row rest-row">
                {this.cards.map((card) =>(
                    <RestCard key={card.id} card={card} />
                ))}
            </div>
        )
    }    
}

export default RestRow;