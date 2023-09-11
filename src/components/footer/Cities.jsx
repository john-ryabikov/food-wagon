import React from 'react'
import CityCol from "./CityCol.jsx"

export class Cities extends React.Component {

    cities = [
        {
            id: 1,
            towns: ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"]
        },
        {
            id: 2,
            towns: ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"]
        },
        {
            id: 3,
            towns: ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"]
        },
        {
            id: 4,
            towns: ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"]
        },
        {
            id: 5,
            towns: ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"]
        }
    ]

    render() {
        return (
            <div className="footer__cities cities">
                {this.cities.map((city) => (
                    <CityCol key={city.id} city={city}/>
                ))}
            </div>  
        )
    }
}

export default Cities
