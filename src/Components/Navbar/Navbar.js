import logo from "../../assets/images/Abra-logo-FullColor-blue.png";
import './Navbar.css';
import { Search } from "./Search/Search";

export const Navbar = () => {
    
    return (
        <div className="navbar">
            <img className="nav_logo" src={logo} />
            <Search></Search>
        </div>
    );
}