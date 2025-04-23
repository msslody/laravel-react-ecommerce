import React, { useEffect, useState } from 'react';
import Carousel from '../shop/Carousel';
import ShopMenu from '../shop/ShopMenu';
import axios from 'axios';

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:8000/api/products') // Ensure this matches your Laravel API route
      .then(response => {
        setProducts(response.data.product); // Assuming 'product' is the key in the response
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  }, []); // Empty array ensures this effect only runs once when the component mounts

  return (
    <>
      <Carousel />
      <ShopMenu products={products} /> {/* Pass products as props */}
    </>
  );
};
