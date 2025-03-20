import React from 'react'
import Navbar from '../layout/NavbarComponent'
import Carousel from '../about/Carousel'
import Story from '../home/story'
import Testimony from '../home/Testimony'
import Menu from '../home/Menu'
import Counter from '../home/Counter'

export default function About() {
  return (
    <>
      <Carousel/>
      <Story/>
      <Testimony/>
      <Menu/>
      <Counter/>
    </>
  )
}
