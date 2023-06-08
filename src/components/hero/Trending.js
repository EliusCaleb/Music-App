import React from "react"
import {  trending } from "../assets/data/data"
import { CardLarge } from "../common/CardLarge"
import { Title } from "../common/Title"
import Slider from "react-slick"

export const Trending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  console.log(trending)
  return (
    <section className='treading hero'>
      <Title title='Trending' />
      <Slider {...settings}>
        {trending.map((item, i) => (
          <div className='box card hero m-5' key={i}>
            <div className='mr-5'>
              <CardLarge cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}