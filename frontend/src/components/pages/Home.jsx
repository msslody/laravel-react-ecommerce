import React from 'react'
import Slideshow from '../home/Slideshow'
import Intro from '../home/Intro'
import ServicesComponent from '../home/ServicesComponent'
import Story from '../home/story'
import Menu from '../home/Menu'
import Counter from '../home/Counter'
import Discover from '../home/Discover'
import Gallery from '../home/Gallery'
import Testimony from '../home/Testimony'
import RecentBlog from '../home/RecentBlog'
import Appointment from '../home/Appointment'

export const Home = () => {
  return (
    <>
      <Slideshow />
      <Intro/>
      <Story/>
      <ServicesComponent/>
      <Menu/>
      <Counter/>
      <Discover/>
      <Gallery/>
      <Testimony/>
      <RecentBlog/>
      <Appointment/>
    </>
  )
}
