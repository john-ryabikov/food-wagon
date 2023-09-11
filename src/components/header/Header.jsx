import React from "react"
import logo from "../../img/header/Logo.svg"
import marker from "../../img/header/map-marker-alt.svg"
import user from "../../img/header/user.svg"

class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <img className="header__logo" src={logo} alt=""/>
                <p className="header__text-box">
                    <span className="header__text-1">Deliver to:</span>
                    <img className="header__marker-img" src={marker} alt="" />
                    <span className="header__text-2">Current Location <b>Mohammadpur Bus Stand, Dhaka</b></span>
                </p>
                <div className="header__search-box">
                    <button className="header__button" onClick={this.props.openModal}>
                        <img className="header__user-img" src={user} alt="" />
                        <span className="header__btn-cont">Login</span>
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;