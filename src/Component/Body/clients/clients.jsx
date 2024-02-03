import React from 'react'
import './client.css';
import CardSlider from './Card';
import cards from './cards';



const Client = () => {

  return (
    <div className='client'>

      <div className="mycli">
       <div className="myclients">
      <p className="clientHead"> 
      <span className='span'>CLIENT  </span> <br />
       My Client </p> 
      </div> 
     
    

      <div className="allcomments">
      <CardSlider cards={cards} />
      </div>
      </div>
     


    </div>
  )
}

export default Client;