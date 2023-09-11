import React from "react"
import Feature from "./Feature.jsx";
import iconFeature1 from "../../img/block-3/icon-feature-1.png"
import iconFeature2 from "../../img/block-3/icon-feature-2.png"
import iconFeature3 from "../../img/block-3/icon-feature-3.png"
import iconFeature4 from "../../img/block-3/icon-feature-4.png"

class BlockThree extends React.Component {

    futures = [
        {
            id: 1,
            icon: iconFeature1,
            name: "Select location",
            text: "Choose the location where your food will be delivered.",
        },
        {
            id: 2,
            icon: iconFeature2,
            name: "Choose order",
            text: "Check over hundreds of menus to pick your favorite food.",
        },
        {
            id: 3,
            icon: iconFeature3,
            name: "Pay advanced",
            text: "It's quick, safe, and simple. Select several methods of payment.",
        },
        {
            id: 4,
            icon: iconFeature4,
            name: "Enjoy meals",
            text: "Food is made and delivered directly to your home.",
        },
    ]

    render () {
        return (
            <section className="block-3">
                <div className="block-3__container">
                    <h2 className="block-3__h2">How does it work</h2>
                    <div className="block-3__features">
                        {this.futures.map(({id, icon, name, text}) =>(
                            <Feature key={id} icon={icon} name={name} text={text}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default BlockThree;