import img1 from '/src/assets/newyork/nyc.jpg';
import img2 from '/src/assets/newyork/nyc1.jpg'
import img3 from 'src/assets/newyork/nyc2.jpg'
import img4 from '/src/assets/newyork/nyc3.jpg';
import img5 from '/src/assets/newyork/nyc4.jpg'
import img6 from 'src/assets/newyork/nyc5.jpg'
import bkg from 'src/assets/newyork/nycskyline.jpg';
import React from 'react'


export default function NYC() {
    return (
    <div>
    <h1>New York City</h1>
    <img className = "img1" src={img1}/>
    <img className = "img1" src={img2}/>
    <img className = "img1" src={img3}/>
    <img className = "img1" src={img4}/>
    <img className = "img1" src={img5}/>
    <img className = "img1" src={img6}/>
    </div>)
}