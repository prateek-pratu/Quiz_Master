import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home"
import InstructionsCategory from "../components/pages/InstructionsCatgory"
import Quiz from "../components/pages/Quiz"
import Summary from "../components/pages/Summary"
import Results from "../components/pages/Results"
import Thankyou from "../components/pages/Thankyou"

const router = createBrowserRouter([
  { 
    path: "/", 
   //  element: <Home/>,
    children: [
      { 
    path: "/", 
    element: <Home/>,
 },
        { 
    path: "instructions", 
    element: <InstructionsCategory/>,
 },
    { 
    path: "quiz/:category", 
    element: <Quiz/>,
 },{ 
    path: "summary", 
    element: <Summary/>,
 },{ 
    path: "results", 
    element: <Results/>,
 },
    ]
 },
 { 
    path: "/end", 
    element: <Thankyou/>,
 },  
  { 
    path: "*", 
    element: <p>page not found</p>,
 },  
]);

export default router;