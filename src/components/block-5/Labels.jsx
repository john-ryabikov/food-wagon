import React from 'react'
import clockIcon from "../../img/block-5/clock-icon.svg"
import labelIcon from "../../img/block-5/label-icon.svg"

export class Labels extends React.Component {
  render() {
    return (
        <div className="rest-card__info-labels">
            <div className="rest-card__info-label-1">
                <img className="rest-card__label-1-icon" src={labelIcon} alt="" />
                <span className="rest-card__label-1-cont">{this.props.percent}% off</span>
            </div>
            <div className="rest-card__info-label-2">
                <img className="rest-card__label-2-icon" src={clockIcon} alt="" />
                <span className="rest-card__label-2-cont">{this.props.clock}</span>
            </div>
        </div>
    )
  }
}

export default Labels
