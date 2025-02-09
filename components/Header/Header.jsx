import "./Header.css"
const Header = () =>{
    return(
        <div className="header">
            
            <nav className="navlist">
                <ul className="navitems">
                    <li className="navitem"><a href="">sign in</a></li>
                    <li className="navitem"><a href="">sign up</a></li>

                </ul>
            </nav>
        </div>
    )
}
export default Header;