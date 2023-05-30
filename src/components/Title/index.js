import React from 'react'
import './index.css';
import Titleimage from "../../assets/images/illustration-working.svg"

function Title() {
  return (
    <div className="title">
        <div className="title-header">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button className='btn-2
            '>Get started</button>
        </div>
        <div className='title-image'>
            <img src={Titleimage} alt='lady working with laptop on desk'/>
        </div>
    </div>
  )
}

export default Title;