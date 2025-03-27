import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout.jsx';
import { Shop } from './components/pages/Shop.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Blog from './components/pages/Blog.jsx';
import Contact from './components/pages/Contact.jsx';
import Menu from './components/pages/Menu.jsx';
import { Home } from './components/pages/Home.jsx';
import Cart from './components/pages/Cart.jsx';
import Checkout from './components/pages/Checkout.jsx';
import Admin from './Admin/pages/Admin.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>

        <RootLayout/>
      </>
    ),
    children: [
      { path: '/', element: <Home/> },
      { path: '/shop', element: <Shop/>  },
      { path: '/about', element: <About/> },
      { path: '/services', element: <Services/> },
      { path: '/blog', element: <Blog/> },
      { path: '/contact', element: <Contact/> },
      { path: '/menu', element: <Menu/> },
      { path: '/cart', element: <Cart/>   },
      { path: '/checkout', element:  <Checkout/> },
    
    ]
    
  },
  { path: '/admin', element:  <Admin/> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
