import Logo from "./Logo.svg"
import React from 'react'

const cerificate = ({name,course}) => {
  return (
    <div id="certificate" className="w-[100vw] p-3 flex flex-col justify center items-center">
        <img src={Logo} className="aspect-square w-[15%]" />
        <h2>Congratulations</h2>
        <h2 id="name">{name}</h2>
        <h4>on Completion of <span id="course">{course}</span></h4>
        <p className='self-end'>Completed on <span id="date">{new Date().toLocaleDateString()}</span></p>
     </div>
  )
}

export default cerificate
