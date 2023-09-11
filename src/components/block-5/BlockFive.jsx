import React from "react"
import RestRow from "./RestRow.jsx"
import iconBtnNext from "../../img/block-4/btn-next.svg"
import imgRest1 from "../../img/block-5/rest-img-1.jpg"
import imgRest2 from "../../img/block-5/rest-img-2.jpg"
import imgRest3 from "../../img/block-5/rest-img-3.jpg"
import imgRest4 from "../../img/block-5/rest-img-4.jpg"
import imgRest5 from "../../img/block-5/rest-img-5.jpg"
import imgRest6 from "../../img/block-5/rest-img-6.jpg"
import imgRest7 from "../../img/block-5/rest-img-7.jpg"
import imgRest8 from "../../img/block-5/rest-img-8.jpg"
import restIcon1 from "../../img/block-5/icon-rest-1.svg"
import restIcon2 from "../../img/block-5/icon-rest-2.svg"
import restIcon3 from "../../img/block-5/icon-rest-3.svg"
import restIcon4 from "../../img/block-5/icon-rest-4.svg"
import restIcon5 from "../../img/block-5/icon-rest-5.svg"
import restIcon6 from "../../img/block-5/icon-rest-6.svg"
import restIcon7 from "../../img/block-5/icon-rest-7.svg"
import restIcon8 from "../../img/block-5/icon-rest-8.svg"


class BlockFive extends React.Component {

    rows = [
        {
            id: 1,
            imgs: [imgRest1, imgRest2, imgRest3, imgRest4],
            icons: [restIcon1, restIcon2, restIcon3, restIcon4],
            percents: ["20","15","10","15"],
            titles: ["Foodworld", "Pizzahub", "Donuts hut", "SubWay"],
            rates: ["46","40","20","50"],
            statuses: [true, true, false, false]
        },
        {
            id: 2,
            imgs: [imgRest5, imgRest6, imgRest7, imgRest8],
            icons: [restIcon5, restIcon6, restIcon7, restIcon8],
            percents: ["10","25","10","10"],
            titles: ["Ruby Tuesday", "Kuakata Fried Chicken", "Red Square", "Taco Bell"],
            rates: ["26","53","45","35"],
            statuses: [false, true, false, true],
        },
    ]

    render () {
        return (
            <section className="block-5">
                <div className="block-5__container">
                    <h3 className="block-5__h3">Featured Restaurants</h3>
                    {this.rows.map((row) => (
                        <RestRow key={row.id} row={row}/>
                    ))}
                    <button className="block-5__btn">
                        <span className="block-5__btn-cont">View All</span>
                        <img className="block-5__btn-icon" src={iconBtnNext} alt="" />
                    </button>
                </div>
            </section>
        )
    }    
}

export default BlockFive;