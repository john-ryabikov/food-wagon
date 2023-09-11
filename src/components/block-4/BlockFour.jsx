import React from "react"
import PopularCard from "./PopularCard.jsx";
import imgPopularCard1 from "../../img/block-4/popular-card-1.png"
import imgPopularCard2 from "../../img/block-4/popular-card-2.png"
import imgPopularCard3 from "../../img/block-4/popular-card-3.png"
import imgPopularCard4 from "../../img/block-4/popular-card-4.png"
import imgPopularCard5 from "../../img/block-4/popular-card-5.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

class BlockFour extends React.Component {

    ArrPopularCards = [
        {
            id: 1,
            img: imgPopularCard1,
            name: "Cheese Burger",
            location: "Burger Arena",
            price: "3.88"
        },
        {
            id: 2,
            img: imgPopularCard2,
            name: "Toffe's Cake",
            location: "Top Sticks",
            price: "4.00"
        },
        {
            id: 3,
            img: imgPopularCard3,
            name: "Dancaker",
            location: "Cake World",
            price: "1.99"
        },
        {
            id: 4,
            img: imgPopularCard4,
            name: "Crispy Sandwitch",
            location: "Fastfood Dine",
            price: "3.00"
        },
        {
            id: 5,
            img: imgPopularCard5,
            name: "Thai  Soup",
            location: "Foody man",
            price: "2.79"
        },
    ]

    render () {
        return (
            <section className="block-4">
                <div className="block-4__container">
                    <Swiper 
                        navigation={true}
                        slidesPerView={4} 
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            650: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 3
                            },
                            1024: {
                                slidesPerView: 4
                            }
                          }} 
                        modules={[Navigation]}
                        className="block-4__popular-items"

                    >
                        <h3 className="block-4__h3">Popular items</h3>
                        {this.ArrPopularCards.map(({id, img, name, location, price}) => (
                            <SwiperSlide key={id}>
                                <PopularCard 
                                    key={id} 
                                    img={img} 
                                    name={name} 
                                    location={location} 
                                    price={price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    }
}

export default BlockFour;