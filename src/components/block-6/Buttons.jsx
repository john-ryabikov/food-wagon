import React from 'react'
import Button from "./Button.jsx"
import googlePlayLogo from "../../img/block-6/google-play-logo.svg"
import googlePlayTitle from "../../img/block-6/google-play-title.svg"
import googlePlayText from "../../img/block-6/google-play.svg"
import appleLogo from "../../img/block-6/apple-logo.svg"
import appleTitle from "../../img/block-6/apple-title.svg"
import appleText from "../../img/block-6/app-store.svg"

export class Buttons extends React.Component {

    btns = [
        {
            id: 1,
            img_logo: googlePlayLogo,
            img_title: googlePlayTitle,
            img_text: googlePlayText,
            alt: "Google",
            title: "promo__btn-title_google",
            text: "promo__btn-text_google"
        },
        {
            id: 2,
            img_logo: appleLogo,
            img_title: appleTitle,
            img_text: appleText,
            alt: "Apple",
            title: "promo__btn-title_apple",
            text: "promo__btn-text_apple"
        }
    ]

    render() {
        return (
            <div className="promo__btns">
                {this.btns.map((btn) => (
                    <Button key={btn.id} btn={btn} />
                ))}
            </div>
        )
    }
}

export default Buttons
