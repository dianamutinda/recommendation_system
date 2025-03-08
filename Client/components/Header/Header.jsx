import "./Header.css"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
            <header className="header">
              <nav className="nav-container">
                <div className="logo">
                  Career<span>Guide</span>
                </div>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/courses">Courses</Link></li>
                  <li><Link to="/chatbot">Chatbot</Link></li>
                  <li><Link to="/career-guide">Career Guide</Link></li>
                </ul>
              </nav>
            </header>
          );
        };
     
export default Header;