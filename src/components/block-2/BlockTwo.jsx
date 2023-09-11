import React from "react"
import DealCard from "./DealCard.jsx";
import card1 from "../../img/block-2/card-1.jpg"
import card2 from "../../img/block-2/card-2.jpg"
import card3 from "../../img/block-2/card-3.jpg"
import card4 from "../../img/block-2/card-4.jpg"

class BlockTwo extends React.Component {

    dealCards = [
        {
            id: 1,
            path: card1,
            discount: 15,
            name: "Greys Vage",
            days: 6,
        },
        {
            id: 2,
            path: card2,
            discount: 10,
            name: "Greys Vage",
            days: 6,
        },
        {
            id: 3,
            path: card3,
            discount: 25,
            name: "Greys Vage",
            days: 7,
        },
        {
            id: 4,
            path: card4,
            discount: 20,
            name: "Greys Vage",
            days: 8,
        }
    ]

    render () {
        return (
            <section className="block-2">
                <div className="block-2__container">
                    {this.dealCards.map(({id, path, discount, name, days}) => (
                        <DealCard key={id} path={path} discount={discount} name={name} days={days}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default BlockTwo;