import React from "react"
import { news } from "../assets/data/data"
import { Title } from "../common/Title"
import { CardLarge } from "../common/CardLarge"

export const New = () => {
  return (
    <>
      <section className='treading hero'>
        <Title title='New' />
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
          {news.map((item, i) => (
            <div className='box card hero' key={i}>
              <CardLarge cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

