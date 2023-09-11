import React from 'react'
import Cities from "./Cities.jsx"
import Subs from "./Subs.jsx"
import Rights from "./Rights.jsx"


export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <h4 className="footer__h4">Our top cities</h4>
                    <Cities/>
                    <Subs/>
                    <Rights/>
                </div>
            </footer>
        )
    }
}

export default Footer
