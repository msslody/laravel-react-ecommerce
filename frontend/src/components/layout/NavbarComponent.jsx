import React from 'react'

export default function Navbar() {
  return (
    <>
         <header className='shadow'>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="#">Mariel<small>Coffee</small></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>
                    <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="/shop" className="nav-link">Shop</a></li>
                    <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                    <li className="nav-item cart"><a href="/cart" className="nav-link"><span className="icon icon-shopping_cart"></span><span className="bag d-flex justify-content-center align-items-center"><small>1</small></span></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    </>
  )
}
