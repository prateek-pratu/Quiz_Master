import { TextField } from "@mui/material"
import Logo from "../../assets/Logo.svg"
import {Button} from "@mui/material"
import { useState } from "react"


const Home = () => {
  const[name,setName]=useState("")

  const handleButtonClick=()=>{
    alert(name)
    setName("")
  }

 const handleInputChange=(e)=>{
  let temp=e.target.value
    setName(
      temp.charAt(0).toUpperCase()+temp.slice(1)
    )
  }
  return (
    <div className="flex flex-col items-center">
        <div className="aspect-square w-60">
          <img src={Logo} alt="Quiz_Master_logo" />
        </div>
        <h2 className="h1_secondary neutral-500">
          <span>Welcome to Quiz Master </span>
          <span className="block ml-30">Platform to test your expertise in the fields</span>
        </h2>
        <TextField
      id="outlined-basic"
      label="Enter Name"
      variant="outlined"
      size="small"
      value={name}
      onChange={handleInputChange}
      slotProps={{
    input: {
      className: "h2_secondary", // applies your font + color inside the input
    },
  }}
      sx={{
        marginTop:"2.5rem",
        "& .MuiOutlinedInput-root": {
          borderRadius:"0.8rem",
          "& fieldset": {
            borderColor: "#FFF3F0", // default border
            borderWidth:"0.2rem",
          },
          "&:hover fieldset": {
            borderColor: "#D7E0FF", // hover border
            borderWidth:"0.1rem",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFF3F0", // focused border
            borderWidth:"0.2rem",
          },
          color: "#FFF3F0", // typed text color
        },
        "& .MuiInputLabel-root": {
          color: "#FFDBB6", // label color
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#FFDBB6", // focused label color
        },
      }}
    />
    <Button variant="contained"
      className="mt-5 aspect-square w-22 rounded-[50%] text-lg bg-[#83FF56] hover:bg-[#78E84F] hover:text-xl"
      onClick={handleButtonClick}
    >GO</Button>
        </div>
  )
}

export default Home