import React from 'react'

export class MenuCol extends React.Component {

    menuCol = this.props.menuCol

    links = [
        {
            id: 1,
            name: this.menuCol.links[0]
        },
        {
            id: 2,
            name: this.menuCol.links[1]
        },
        {
            id: 3,
            name: this.menuCol.links[2]
        },
        {
            id: 4,
            name: this.menuCol.links[3]
        },
    ]

    render() {
        return (
            <div className="subs__menu-col">
                <p className="subs__menu-title">{this.menuCol.title}</p>
                {this.links.map((link) => (
                    <a href="/" key={link.id} className="subs__menu-link">{link.name}</a>
                ))}
            </div>
        )
    }
}

export default MenuCol
