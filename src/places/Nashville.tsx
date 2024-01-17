
import React from 'react';
import boots from '/src/assets/nashville/cowboyboots.png';
import fit1 from '/src/assets/nashville/nash2.png'
import hat from 'src/assets/nashville/cowboyhat.png'
import '/src/Pages.css'

function Nashville() {
    return (
        <div>
            <h1>Nashville</h1>
            <img className = "img1" src={boots}/>
            <img className = "img1" src={fit1}/>
            <img className = "img1" src={hat}/>
        </div>)
}

export default Nashville;