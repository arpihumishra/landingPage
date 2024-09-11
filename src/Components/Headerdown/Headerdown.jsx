import './Headerdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import Headerdownoptions from '../Headerdownoptions/Headerdownoptions'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Headerdown = () => {
  return (
    <div className='header'>
        <div className='headerdown'>
            <FontAwesomeIcon icon={faFolderPlus} size="2x" id='folder'/>
            <h1>Landing Page</h1>
        </div>
        <div className='options'>
          <Headerdownoptions option="Home"/>
          <Headerdownoptions option="Blog"/>
          <Headerdownoptions option="Page"/>
          <Headerdownoptions option="Services"/>
          <Headerdownoptions option="Testimonals"/>
          <Headerdownoptions option="Contact"/>
          <Headerdownoptions option="Buy Now"/>  
        </div>
        <div className='icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} id ="ic"/>
        </div>
    </div>
  )
}

export default Headerdown