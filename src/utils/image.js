import React from 'react'


const Image = props =>
  <div className="animate">
    <img src={props.src} className={props.class} alt="" />
  </div>

export default Image