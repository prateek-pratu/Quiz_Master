import React from 'react'
import Logo from"@/assets/Logo.svg"
import Exit from "@/assets/exit.svg"
import Progressbar from '@/components/shared/Progressbar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Certificate from '@/assets/cerificate.jsx'
import html2pdf from 'html2pdf.js'


const Results = () => {
  const navigate=useNavigate();

  const name=useSelector(state=>state.name.name)
const subjects=["Science","Mathematics","Sports","General Knowledge"]
const overall=30;

  const handleExit=()=>{
    navigate("/end")
  }

    const downloadToPdf=()=>{
    const element = document.getElementById("certificate");
    const options = {
      margin: 0,
      // filename: `${name}-certificate.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    };
    html2pdf().set(options).from(element).save("certificate.pdf");
  }

  return (<>
          <div className='hidden'>
              <Certificate name={"pratu"} course={"react"}/>
          </div>
        <button className='absolute right-3 flex flex-col items-center neutral-100' onClick={handleExit}><img src={Exit} className='cursor-pointer self-end'/>click on exit button</button>
    <div className='flex flex-col items-center'>
      <img src={Logo} className='aspect-square w-55' alt="Logo" />
      <h2 className="h1_main accent1-500 text-center">Congratulations</h2>
      <button onClick={downloadToPdf}>pdf</button>
      <div className='bg-neutral-200 rounded overflow-hidden w-[30vw]'>
        <div className='text-center border-b-3 border-neutral-100'>
          <h3 className='h3_main accent1-100'>Overall {overall+"%"}</h3>
        </div>
        <div className='flex border-b-3 border-neutral-100'>
        <div className='p-3 w-[40%] border-r-3 border-neutral-100 flex items-center'>
          <h3 className='h3_main neutral-500'>Name{name}</h3>
        </div>
        <div className='flex flex-col w-full'>
          {/* map hrough iterations and display below */}
          {subjects.map((subject,i)=>{
            return(
              <div key={i} className={`p-3 pl-8 border-neutral-100 ${i!=subjects.length-1?"border-b-3":""}`}>
                <h4 className='p_main accent1-100'>{subject}</h4>
                <div className='flex items-center justify-center'>
                  <Progressbar fill={overall}/><p className='ml-2 p_main neutral-400'>{overall}%</p></div>
            </div>
            )
          })}
          {/* ////////////////////////////////// */}
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Results