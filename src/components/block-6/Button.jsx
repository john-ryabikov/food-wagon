import React from 'react'

export class Button extends React.Component {

    btn = this.props.btn

    render() {
        return (
            <button className="promo__btn">
                <img className="promo__btn-logo" src={this.btn.img_logo} alt={this.btn.alt} />
                <div className="promo__btn-cont">
                    <img className={this.btn.title} src={this.btn.img_title} alt="" />
                    <img className={this.btn.text} src={this.btn.img_text} alt="" />
                </div>
            </button>
        )
    }
}

export default Button
