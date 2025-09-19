import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/home"
import InstructionsCategory from "@/components/pages/instructions"
import Quiz from "@/components/pages/quiz"
import Summary from "@/components/pages/summary"
import Results from "@/components/pages/results"
import Thankyou from "@/components/pages/thankyou"

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