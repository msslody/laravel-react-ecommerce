import React from 'react'

export default function Navbar() {
  return (
    <>
         <header className='shadow'>
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                <a class="navbar-brand" href="index.html">Mariel<small>Coffee</small></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/menu" class="nav-link">Menu</a></li>
                    <li class="nav-item"><a href="/services" class="nav-link">Services</a></li>
                    <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="/shop" class="nav-link">Shop</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                    <li class="nav-item cart"><a href="/cart" class="nav-link"><span class="icon icon-shopping_cart"></span><span class="bag d-flex justify-content-center align-items-center"><small>1</small></span></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    </>
  )
}
