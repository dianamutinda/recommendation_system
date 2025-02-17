import "./Header.css"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="header">
            
            <nav className="navlist">
                <ul className="navitems">
                    <li className="navitem">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="navitem">
                        <Link to="/signup">sign up</Link>
                        </li>
                    <li className="navitem">
                        <Link to="/signin">sign in</Link>
                        </li>

                </ul>
            </nav>
        </div>
    )
}
export default Header;