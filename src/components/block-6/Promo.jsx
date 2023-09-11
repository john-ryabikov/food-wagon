import React from "react"
import Buttons from "./Buttons.jsx"
import imgApp from "../../img/block-6/app-phone.png"

class Promo extends React.Component {
    render () {
        return (
            <div className="block-6__promo promo">
                <img className="promo__img" src={imgApp} alt="" />
                <div className="promo__text">
                    <h4 className="promo__h4">Install the app</h4>
                    <p className="promo__p">It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
                    <Buttons/>
                </div>
            </div>
        )
    }
}

export default Promo;