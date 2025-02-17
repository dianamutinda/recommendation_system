import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
/**import Signin from "../Pages/Authentication/Signin";
import Signup from "../Pages/Authentication/Signup";**/
import Hero from "../Pages/Home/Hero";
import About from "../Pages/Home/About";
import Testimonials from "../Pages/Home/Testimonials";
const app = () =>{
  return(
    <>
    <Header/>
    <Hero/>
    <About/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
export default app;