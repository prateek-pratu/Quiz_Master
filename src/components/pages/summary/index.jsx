import Logo from '@/components/shared/Logo'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


let summary=[{Category:"Sports",Answered:5,NotAnswered:5,TotalQuestions:10},
  {Category:"GK",Answered:5,NotAnswered:5,TotalQuestions:10},
  {Category:"Mathematics",Answered:5,NotAnswered:5,TotalQuestions:10},
  {Category:"Science",Answered:5,NotAnswered:5,TotalQuestions:10},
]

const Summary = () => {
  const name=useSelector(state=>state.name.name)
  const navigate=useNavigate()
  const [timer,setTimer]=useState(10)

  useEffect(()=>{
    let time=setTimeout(()=>{setTimer(timer-1)},1000)
    if(timer===0){
      clearInterval(time)
      navigate("/results")
    }
  },[timer])

  return (
  <div className='w-[100vw] px-3 pt-1 pb-5'>
        <div className='flex justify-between'>
        <Logo/>
        <h2 className='p-5 h2_secondary text-neutral-500'>Hi,{name}</h2>
        </div>
    <h1 className='h1_main text-3xl text-center text-neutral-500 mb-5'>SUMMARY</h1>
    <div className='flex justify-center '>
      <div className='border-3 rounded-2xl border-neutral-200 overflow-hidden'>
      <table className=' text-neutral-500 border-collapse '>
        <thead>
        <tr>
          <th className='p-3 h2_main border-neutral-200 border-3 border-t-0 border-l-0 text-left'>Category</th>
          <th className='p-3 h2_main border-neutral-200 border-3 border-t-0'>Answered</th>
          <th className='p-3 h2_main border-neutral-200 border-3 border-t-0'>Not ANswered</th>
          <th className='p-3 h2_main border-neutral-200 border-3 border-t-0 border-r-0'>Total Questions</th>
        </tr>
        </thead>
        <tbody>
        {summary.map((resp,i)=>{return(
          <tr>
            <td className={`p-3 h2_secondary border-neutral-200 border-3 border-l-0 ${i===summary.length-1 && `border-b-0`}`}>{resp.Category}</td>
            <td className={`p-3 h2_secondary border-neutral-200 border-3 text-center ${i===summary.length-1 && `border-b-0`}`}>{resp.Answered}</td>
            <td className={`p-3 h2_secondary border-neutral-200 border-3 text-center ${i===summary.length-1 && `border-b-0`}`}>{resp.NotAnswered}</td>
            <td className={`p-3 h2_secondary border-neutral-200 border-3 text-center border-r-0 ${i===summary.length-1 && `border-b-0`}`}>{resp.TotalQuestions}</td>
          </tr>
        )})}
        </tbody>
      </table>
      </div>
    </div>
    <div className=' w-[95%] flex justify-end'><h2 className='h4_secondary text-accent2-900'>Redirecting to Result in {timer} sec...</h2></div>
    </div>
  )
}

export default Summary