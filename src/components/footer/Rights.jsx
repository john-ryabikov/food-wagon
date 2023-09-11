import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

export class Rigths extends React.Component {
    render() {
        return (
            <div className="footer__rights rights">
                <p className="rights__copyright">All rights Reserved <b><FontAwesomeIcon icon={faCopyright} /> Your Company, 2023</b></p>
                <p className="rights__author">Made by <a href="/" className="rights__author-link">Just-site.ru</a></p>
            </div>
        )
    }
}

export default Rigths