import Header from "../components/Header/Header"
import Signin from "../Pages/Authentication/Signin";
import Signup from "../Pages/Authentication/Signup";
import Testimonials from "../Pages/Home/Testimonials";
const app = () =>{
  return(
    <>
    <Header/>
    <Signin/>
    <Signup/>
    <Testimonials/>
    </>
  )
}
export default app;