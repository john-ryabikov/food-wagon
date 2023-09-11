import React from "react"
import PremCard from "./PremCard.jsx";
import iconPrem1 from "../../img/block-6/icon-1.svg"
import iconPrem2 from "../../img/block-6/icon-2.svg"
import iconPrem3 from "../../img/block-6/icon-3.svg"


class Prems extends React.Component {

    premCards = [
        {
            id: 1,
            img: iconPrem1,
            word_1: "Daily",
            word_2: "Discounts"
        },
        {
            id: 2,
            img: iconPrem2,
            word_1: "Live",
            word_2: "Tracing"
        },
        {
            id: 3,
            img: iconPrem3,
            word_1: "Quick",
            word_2: "Delivery"
        },
    ]

    render () {
        return (
            <div className="block-6__prems prems">
                {this.premCards.map((card) => (
                    <PremCard key={card.id} card={card} />
                ))}
            </div>
        )
    }
}

export default Prems;