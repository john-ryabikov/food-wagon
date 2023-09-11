import React from 'react'
import rateIcon from "../../img/block-5/star-icon.svg"

export class RestInfo extends React.Component {
  render() {
    return (
        <div className="rest-card__rest-info">
            <img className="rest-card__rest-icon" src={this.props.icon} alt="" />
            <div className="rest-card__rest-rate">
                <p className="rest-card__rest-title">{this.props.title}</p>
                <div className="rest-card__rate-text">
                    <img className="rest-card__rate-icon" src={rateIcon} alt="" />
                    <span className="rest-card__rate-cont">{this.props.rate}</span>
                </div>
            </div>
        </div>
    )
  }
}

export default RestInfo
