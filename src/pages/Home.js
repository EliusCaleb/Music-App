import React from "react"
import { Hero, LayoutSidebar,New,Trending } from "../router"

export const Home = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Trending />
        <New/>
      </LayoutSidebar>
    </>
  )
}

