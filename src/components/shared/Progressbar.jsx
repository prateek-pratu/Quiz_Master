import React from 'react'

const Progressbar = ({fill}) => {
return (
    <div name="border" className="bg-neutral-100 h-5 w-40 border-3 border-neutral-100 rounded-full overflow-hidden">
        <div name="fill" className={`bg-green-500 h-full`} style={{width:`${fill}%`}}></div>
    </div>
)
}

export default Progressbar