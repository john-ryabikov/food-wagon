import React from 'react'
import MenuCol from "./MenuCol.jsx"

export class Menu extends React.Component {

    menuCols = [
        {
            id: 1,
            title: "Company",
            links: ["About us", "Team", "Careers", "Blog"]
        },
        {
            id: 2,
            title: "Contact",
            links: ["Help & Support", "Partner with us", "Ride with us"]
        },
        {
            id: 3,
            title: "Legal",
            links: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"]
        },
    ]

    render() {
        return (
            <div className="subs__menu">
                {this.menuCols.map((menuCol) => (
                    <MenuCol key={menuCol.id} menuCol={menuCol}/>
                ))}
            </div>
        )
    }
}

export default Menu
