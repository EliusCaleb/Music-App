import React from "react"
import { browse } from "../assets/data/data"
import { CardSmall } from "../common/CardSmall"

export const Chart = () => {
  return (
    <>
      <section className='treading hero mt-8 sm:mt-20'>
        <h1 className='text-5xl font-bold mb-5 text-primary'>Browse</h1>
        <div className='grid grid-cols-1 gap-5'>
          {browse.map((item, i) => (
            <div className='box card hero' key={i}>
              <CardSmall cover={item.cover} name={item.name} tag={item.tag} i={i} show={true} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
