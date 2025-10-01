import { useSelector } from 'react-redux'
import Logo from '@/components/shared/Logo'
import {instructions} from "@/constants/instructions.js"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const InstructionsCatgory = () => {
const name=useSelector(state=>state.name.name)
const navigate=useNavigate()
const [checked,setChecked]=useState(false)
const [showCategory,setShowCategory]=useState(false)
const array=["Matehmetics","Sports","GK","Science"]

  const handleChecked=()=>{
    setChecked(!checked)
  }
  const handleStart=()=>{
    setShowCategory(true)
  }
  return (
    <div className='w-[100vw] px-3 pt-1 pb-5'>
      <Logo/>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='h2_secondary text-center text-neutral-500'>Hi, {name}</h2>

        {showCategory?
        <div>
          <h2 className='h2_secondary'>Please select Category to start Quiz</h2>
          <div className='flex justify-center mt-5'>
          <ol>
            {array.map((category,i)=>{
            return <li  className={`list-${i+2} transition-all ease-in-out mb-2 hover:scale-125 hover:cursor-pointer `}onClick={()=>navigate(`/quiz/${category}`)}>{category}</li>
              })}
          
          </ol>
          </div>
        </div>
        :
          <>
            <h1 className='h1_secondary text-neutral-500'>Quiz Instructions</h1>
            <ol className='p_main text-lg list-decimal w-[85%] text-neutral-500'>
              {Object.keys(instructions).map(key=>{
              return <li>{instructions[key]}</li>
              })}
            </ol>
              <label
                class="relative text-neutral-500 flex cursor-pointer items-center justify-center gap-[1em]"
                for="consnet"
              >
                <input class="peer appearance-none" id="consnet" name="consnet" type="checkbox" checked={checked} onChange={handleChecked}/>
                <span
                  class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-neutral-100"
                >
                </span>
                <svg
                  viewBox="0 0 69 89"
                  class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                  fill="none"
                  height="89"
                  width="69"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                    stroke-width="6px"
                    stroke="#FFFBFA"
                    pathLength="100"
                  ></path>
                </svg>

                <p class="text-[1em] font-bold [user-select:none]">I have read all the instructions and ready to take quiz.</p>
              </label>

              <Button variant='contained' 
                className={`rounded-full w-[10%] bg-secondary-500 text-accent1-500 font-semibold ${!checked?"opacity-50":"opacity-100"}`}
                onClick={handleStart}
                disabled={!checked}
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