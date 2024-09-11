import './Footer.css'

import React from 'react'
import Footeroptions from '../Footeroptions/Footeroptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsSamplingPlus } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
        <div className='foot'>
            <div className='footer'>
                <h1>OUR SERVICES</h1>
                <button id='dash'></button>
            </div>
            <div className='footeroptions1'>
                <Footeroptions image="https://tse3.mm.bing.net/th?id=OIP.86Ta2zz9FzolBqhRH459kwHaE0&pid=Api&P=0&h=180" icons ={faVolumeHigh} para="User Experience"/>
                {/* <Footeroptions image=""  icons={faVolumeHigh} para="User Experience"/> */}
                
                <Footeroptions image="https://tse2.mm.bing.net/th?id=OIP.R29YDiOr0l9AoUjLisQhnAHaE1&pid=Api&P=0&h=180"  icons={faCreativeCommonsSamplingPlus} para="Creative Design"/>
                
                <Footeroptions image="" icons ={faDollarSign} para="Retina Ready"/>

            </div>
        </div>
  )
}

export default Footer