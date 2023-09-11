import React from 'react'
import Menu from "./Menu.jsx"
import Follow from "./Follow.jsx"

export class Subs extends React.Component {
    render() {
        return (
            <div className="footer__subs subs">
                <Menu/>
                <Follow/>
            </div>
        )
    }
}

export default Subs