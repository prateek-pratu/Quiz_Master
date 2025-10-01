import { useSelector } from 'react-redux'
import Logo from '@/components/shared/Logo'
import {instructions} from "@/constants/instructions.js"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const InstructionsCatgory = () => {
const name=useSelector(state=>state.name.name)
const navigate=useNavigate()
const [showCategory,setShowCategory]=useState(false)
const array=["science","matehmetics","GK","Sports"]
  const handleStart=()=>{
    setShowCategory(true)
  }
  return (
    <div className='w-[100vw]'>
      <Logo/>
      <div className='flex flex-col items-center'>
        <h2 className='h2_secondary'>Hi, {name}</h2>
        {showCategory?
        <div>
          <h4>Please select Category to start Quiz</h4>
          <ol>
            {array.map((category,i)=>{
            return <li onClick={()=>navigate(`/quiz/${category}`)}>{category}</li>
              })}
          
          </ol>
        </div>
        :
          <>
            <h1 className='h1_secondary'>Quiz Instructions</h1>
            <ol className='list-decimal w-[65%]'>
              {Object.keys(instructions).map(key=>{
                // console.log(instructions[key])
              return <li className='p_main text-lg'>{instructions[key]}</li>
              })}
            </ol>
              <label htmlFor="consnet">
                <input type="checkbox" name="consent" id="consent" />
                <span className='ml-2 h3_main'>I have read all the instructions and ready to take quiz.</span>
              </label>
              <Button variant='contained' 
                className='rounded-full w-[10%] bg-secondary-500 text-accent1-500 font-semibold'
                onClick={handleStart}
                >
                  Start
              </Button>
          </>
          }
      </div>
    </div>
  )
}

export default InstructionsCatgory