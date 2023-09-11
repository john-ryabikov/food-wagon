import React from "react"
import TitleCard from "./TitleCard.jsx";

class BlockOne extends React.Component {
    render () {
        return (
            <section className="block-1">
                <div className="block-1__container">
                    <TitleCard name1="Delivery" name2="Pickup"/>
                </div>
            </section>

        )
    }
}

export default BlockOne;