import React from "react"
import { Hero, LayoutSidebar, Trending } from "../router"

export const Home = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Trending />
      
      </LayoutSidebar>
    </>
  )
}

