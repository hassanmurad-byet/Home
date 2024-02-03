
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

import img6 from './project/weather.png';
import weather from './project/weather.mp4';



const data = [
    {
        id: 1,
        poster: img1,
        videoUri: book,
        info: 'HTML,CSS,REACTJS',
        title:'Online BookStore'

    },
    {
        id: 2,
        poster: img2,
        videoUri: iubat,
        info: 'HTML,CSS,REACTJS',
        title:'University'

    },
    {
        id: 3,
        poster: img3,
        videoUri: tkdo,
        info: 'HTML,CSS,REACTJS',
        title:'Taekwondo'
        
    },
    {
        id: 4,
        poster: img4,
        videoUri: django,
        info: 'Python Django',
        title:'Django'
        
    },
    {
        id: 5,
        poster: img5,
        videoUri: machin,
        info: 'Python, Tensorflow, Numpy, Pandas',
        title:'Machine learning'

    },
    {
        id: 6,
        poster: img6,
        videoUri: weather,
        info: 'React js',
        title:'Weather'

    },

]


export default data;