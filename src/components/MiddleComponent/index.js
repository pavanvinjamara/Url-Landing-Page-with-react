import React from 'react'
import './index.css'
import Image1 from '../../assets/images/icon-brand-recognition.svg';
import Image2 from '../../assets/images/icon-detailed-records.svg';
import Image3 from '../../assets/images/icon-fully-customizable.svg';

function MiddleComponent() {
  return (
    <div className='middle-container'>
        <div className='middle-info1'>
            <h1> Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
        </div>
        <div className='middle-info2'>
          <hr/>
            <div className='middle-subinfo'>
                <img src={Image1} alt=''/>
                <h2>Brand Recognition</h2>
                <p> Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className='middle-subinfo design'>
                <img src={Image2} alt=''/>
                <h2> Detailed Records</h2>
                <p>  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
            </div>
            <div className='middle-subinfo design1'>
                <img src={Image3} alt=''/>
                <h2>Fully Customizable
</h2>
                <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
            </div>
        </div> 
        <div className='middle-info3'>
          <h1>Boost your links today</h1>
          <button className='btn-2 hover-btn'>Get Started</button>
        </div>
    </div>
  )
}

export default MiddleComponent