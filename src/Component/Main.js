import React from 'react';
import '././Header/nav.css';
 
import Home from './Body/Home/home';
import About from './Body/about/about';
import Portfolio from './Body/portfolio/portfolio';
import Client from './Body/clients/clients';
import Blog from './Body/Blog/blog';
import Contact from './Body/Contact/contact';
import { Route, Routes } from 'react-router-dom';
 
const Main = () => {
  return (
    <div>
   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/client' element={<Client />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
    

    </div>

  )
}

export default Main