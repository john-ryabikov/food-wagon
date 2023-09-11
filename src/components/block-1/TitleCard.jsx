import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMotorcycle, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import iconMarker from "../../img/block-1/Icon_marker.svg"
import iconSearch from "../../img/block-1/Icon_search.svg"
import imgFood from "../../img/block-1/food.png"

class TitleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.tabActive = this.tabActive.bind(this);
    }
    tabActive() {
        const status = this.state.active;
        this.setState({
            active: !status
        });
    }
    render () {
        return (
            <div className="block-1__info-title info-title">
                <div className="info-title__main">
                    <h1 className="info-title__h1">Are you starving?</h1>
                    <p className="info-title__sub-h1">Within a few clicks, find meals that are accessible near you</p>
                    <div className="info-title__card">
                        <div className="info-title__card-top">
                            <p className={this.state.active ? "info-title__card-tab" : "info-title__card-tab_on"} onClick={this.tabActive}>
                                <FontAwesomeIcon className="info-title__tab-icon" icon={faMotorcycle} />
                                <span className="info-title__tab-label">{this.props.name1}</span>
                            </p>
                            <p className={this.state.active ? "info-title__card-tab_on" : "info-title__card-tab"} onClick={this.tabActive}>
                                <FontAwesomeIcon className="info-title__tab-icon" icon={faBagShopping} />
                                <span className="info-title__tab-label">{this.props.name2}</span>
                            </p>
                        </div>
                        <div className="info-title__card-bottom">
                            <div className="info-title__input-box">
                                <div className="info-title__icon-box">
                                    <img src={iconMarker} alt="" />
                                </div>
                                <input className="info-title__input" type="text" placeholder="Enter Your Address"  />
                            </div>
                            <button className="info-title__button">
                                <img className="info-title__icon-btn" src={iconSearch} alt="" />
                                <span className="info-title__btn-cont">Find Food</span>
                            </button>
                        </div>
                    </div>
                </div>
                <img className="info-title__img" src={imgFood} alt="" />
            </div>
        )
    }

}

export default TitleCard;

