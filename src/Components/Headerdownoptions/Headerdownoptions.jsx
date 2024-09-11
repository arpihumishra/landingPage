import './Headerdownoptions.css'

import React from 'react'

const Headerdownoptions = (props) => {

    const option = props.option;
  return (
    <div className='opt'>
        <h5>{option}</h5>
    </div>
  )
}

export default Headerdownoptions