import React from "react"
import Prems from "./Prems.jsx"
import Promo from "./Promo.jsx"
import imgBlock from "../../img/block-6/rectangle.svg"


class BlockSix extends React.Component {
    render () {
        return (
            <section className="block-6">
                <div className="block-6__container">
                    <Prems/>
                    <Promo/>
                </div>
                <img className="block-6__img" src={imgBlock} alt="" />
            </section>
        )
    }
}

export default BlockSix;