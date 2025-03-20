import React from 'react'
import Navbar from '../layout/NavbarComponent'
import BlogComponent from '../blog/BlogComponent'
import Carousel from '../blog/Carousel'

export default function Blog() {
  return (
    <>
      <Carousel/>
      <BlogComponent/>
    </>
  )
}
