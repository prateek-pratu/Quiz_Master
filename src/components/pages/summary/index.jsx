import Certificate from '@/assets/cerificate.jsx'
import html2pdf from 'html2pdf.js'

const Summary = () => {

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
  return (
    <div>
      <div className='hidden'>
      <Certificate name={"pratu"} course={"react"}/>
      </div>
      Summary
      <button onClick={downloadToPdf}>pdf</button>
    </div>
  )
}

export default Summary