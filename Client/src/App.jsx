import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Signin from "../Pages/Authentication/Signin";
import Signup from "../Pages/Authentication/Signup";
import Home from "../Pages/Home/Home";
import System from "../Pages/System/System";
import Chatbot from "../Pages/Chatbot/Chatbot";
import Courses from "../Pages/Courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const app = () =>{
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/career-guide" element={<System/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/courses" element={<Courses/>}/>
    </Routes></BrowserRouter>
    <Footer/>
    
    </>
  )
}
export default app;