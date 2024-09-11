import './Footeroptions.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footeroptions = (props) => {

    const image = props.image;
    const icons = props.icons;
    const para = props.para;
  return (
    <div className='footeroptions3'>
      {
        image.length>0 ? <img src={image} /> : <div className='images'></div>
      }
        
        <div className='footeroptions2'>
             <div id='icon1'>
             <FontAwesomeIcon icon={icons}  />
             </div>
             <h6>{para}</h6>
        </div>
    </div>
  )
}

export default Footeroptions