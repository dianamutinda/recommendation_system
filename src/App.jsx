import Header from "../components/Header/Header"
import Signin from "../Pages/Authentication/Signin";
import Signup from "../Pages/Authentication/Signup";
const app = () =>{
  return(
    <>
    <Header/>
    <Signin/>
    <Signup/>
    </>
  )
}
export default app;