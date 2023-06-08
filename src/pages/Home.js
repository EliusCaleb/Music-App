import React from "react"
import { Hero, LayoutSidebar,New,Recommand,Trending } from "../router"

export const Home = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Trending />
        <New/>
        <Recommand />
      </LayoutSidebar>
    </>
  )
}

