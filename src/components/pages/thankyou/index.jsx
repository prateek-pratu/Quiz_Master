import React from 'react'
import thank from "@/assets/thankyou.svg"

const Thankyou = () => {
  return (
    <div className='w-[75vw] p-25'>
      <img className="aspect-rectangle w-100" src={thank} alt="Thank_you_image" />
      <div className='w-full flex justify-center mt-10 text-accent2-500'>
        <h2 className='h2_main'>Please Visit Again</h2>
        </div>
    </div>
  )
}

export default Thankyou