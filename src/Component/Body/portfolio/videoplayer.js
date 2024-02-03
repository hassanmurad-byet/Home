import React, { useState, createRef } from 'react';
import './video.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import close from './img/close.png';
import mini from './img/min.png';
import full from './img/full.png';

import img1 from './project/book.png';
import book from './project/Bookstore.mp4';

import img2 from './project/iubat-1.png';
import iubat from './project/iubat.mp4';

import img3 from './project/tkd2.png';
import tkdo from './project/taekwondo.mp4';

import img4 from './project/hostel.png';
import django from './project/django.mp4';

import img5 from './project/mchin.png';
import machin from './project/machin.mp4';

// import img6 from './img/tik.png';
// import tik from './img/tiktak.mp4';

import img6 from './project/weather.png';
import weather from './project/weather.mp4';


const Videoplayer = () => {

    const [model,setModel] = useState(false);
    
    const data = [
        {
            id: 1,
            poster: img3,
            videoUri: tkdo,
            info: 'Taekwondo Frontend',
            language:'HTML,CSS,ReactJs'
        },
        {
            id: 2,
            poster: img2,
            videoUri: iubat,
            info: 'University Frontend',
            language:'HTML,CSS,ReactJs'

        },
        {
            id: 1,
            poster: img1,
            videoUri: book,
            info: 'Online Bookstore Frontend',
            language:'HTML,CSS,ReactJs'
        },
     
        {
            id: 4,
            poster: img4,
            videoUri: django,
             info: 'The Hosteler2.0 Backend',
             language:'Python,Django,HTML,CSS,Bootstrap'
        },
        {
            id: 5,
            poster: img5,
            videoUri: machin,
            info: 'Machin Learling',
            language:'Python,Tensorflow,Numpy,Pandas,Algorithm-Hascascade'

        },
        {
            id: 6,
            poster: img6,
            videoUri: weather,
            info: 'Weather App Frontend',
            language:'HTML,CSS,ReactJs'

        },

    ]


    return (

        <div className='gallary'>
           
            {data.map((item, index) => {
                let divRef = createRef(null);
                const openModel = () =>{
                    divRef.current.classList.remove('video');
                    divRef.current.classList.add('model');
                    setModel(true);

                }
                const closeModel = () =>{
                    divRef.current.classList.add('video');
                    divRef.current.classList.remove('model');
                    setModel(false);


                }

                return (
                    <div ref={divRef} className='video' key={index}>
                        {model && <button className='model-close-btn' onClick={()=>closeModel()}>X</button>}
                        <div className='video-container' onClick={() => openModel()}>

                            <div className='allbutton'>
                                <img src={close} alt="" className='icon' />
                                <img src={mini} alt="" className='icon' />
                                <img src={full} alt="" className='icon' />

                            </div>
                            <div className='allvideos'> 
                            <Video
                                
                                style={{ width: '100%' }}
                                autoPlay={model}
                                controls={['PalyPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster={item.poster}
                            >
                                <source src={item.videoUri}  type='video/webm' />
                               
                                
                            </Video>
                 
                            </div> 
                            <div className='workinfo'>
                      <p className='headtxt'>  {item.info}  </p> 
                      <p className='txt'>Language: {item.language}   </p>
                    
                     </div>
                        </div>
                       
                      
                    </div>
                 
                )
            })}
             
        </div>

    )
}

export default Videoplayer;