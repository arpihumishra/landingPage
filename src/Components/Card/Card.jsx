import './Card.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {

    const icons = props.icons;
    const heading = props.heading;
    const para = props.para;
  return (
    <div className='card'>
        <div className='uppercard'>
            <FontAwesomeIcon icon={icons} id = 'icon6'/>
            <h3>{heading}</h3>
        </div>
        <div className='lowercard'>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Card