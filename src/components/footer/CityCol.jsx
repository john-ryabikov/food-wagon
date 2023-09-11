import React from 'react'

export class CityCol extends React.Component {

    city = this.props.city

    towns = [
        {
            id: 1,
            name: this.city.towns[0]
        },
        {
            id: 2,
            name: this.city.towns[1]
        },
        {
            id: 3,
            name: this.city.towns[2]
        },
        {
            id: 4,
            name: this.city.towns[3]
        },
        {
            id: 5,
            name: this.city.towns[4]
        },
    ]

    render() {
        return (
            <div className="cities__towns">
                {this.towns.map((town) => (
                    <p className="cities__town" key={town.id}>{town.name}</p>
                ))}
            </div>
        )
    }
}

export default CityCol
