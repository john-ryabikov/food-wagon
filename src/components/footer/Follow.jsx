import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export class Follow extends React.Component {
    render() {
        return (
            <div className="subs__follow">
                <p className="subs__follow-title">Follow Us</p>
                <p className="subs__foolow-soc-row">
                    <a href="/" className="subs__follow-soc"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="/" className="subs__follow-soc"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="/" className="subs__follow-soc"><FontAwesomeIcon icon={faTwitter} /></a>
                </p>
                <form className="subs__follow-form">
                    <p className="subs__follow-form-p">Receive exclusive offers in your mailbox</p>
                    <div className="subs__follow-send">
                        <div className="subs__follow-input-box">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <input className="subs__follow-input" type="text" placeholder="Enter Your email"  />
                        </div>
                        <button className="subs__follow-form-btn">Subscribe</button>
                    </div>    
                </form>
            </div>
        )
    }
}

export default Follow
