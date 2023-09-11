import React from "react"


class DealCard extends React.Component {
    render () {
        return (
            <div className="block-2__deal-card deal-card">
                <div className="deal-card__img-box">
                    <img className="deal-card__img" src={this.props.path} alt="" />
                    <div className="deal-card__discount">
                        <p className="deal-card__discount-num">{this.props.discount}</p>
                        <p className="deal-card__discount-persent">
                            <span className="deal-card__discount-span-1">%</span>
                            <span className="deal-card__discount-span-2">Off</span>
                        </p>
                    </div>
                </div>
                <p className="deal-card__name">{this.props.name}</p>
                <p className="deal-card__tab">{this.props.days} Days Remaining</p>
            </div>
        )
    }
}

export default DealCard;