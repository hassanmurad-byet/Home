import React from 'react';
import './port.css';
import Videoplayer from './videoplayer';

const Portfolio = () => {
 

  return (
    <div className='portfolio'>

      <div className="port">

      <div className="myclients"><p className="clientHead"> <span className='span'>FORTFOLIO </span> <br />
            My Works </p> </div>

        <div className="catagory">
          
          <Videoplayer />
        </div>

     

      </div>

    </div>
  )
}

export default Portfolio;