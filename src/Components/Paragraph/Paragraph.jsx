import './Paragraph.css'

import React from 'react'

const Paragraph = () => {
  return (
    <div className='paragraph'>
     
        <div className='demo-content'>
          <div className='line'>
            <button id = 'line1'></button>
          </div>
         <div>
          <div className='para'>
                <h3>WE ARE CREATIVE</h3>
                <h2>CREATIVE DIGITAL AGENCY</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis dolore, est consequatur, voluptatem obcaecati iusto delectus pariatur asperiores, saepe corrupti maiores in nam dolorem molestiae sequi sed vel dolores odit? Voluptatem ea tempore, ipsam placeat dolore consequatur porro dignissimos?</p>
            </div>
            <div className='button1'>
              <button className='b1'>READ MORE</button>
              <button className='b2'>REQUEST A CONSULT</button>
            </div>
         </div>

        </div>
    </div>
  )
}

export default Paragraph