import { NavLink } from "react-router-dom";
import '../style/style.css'


export default function Navbar() {

    const navstyles = ({ isActive }) =>
        isActive
            ? {
                color: '#fff',
                background: '#7600dc',
            }
            : { 
                color: '#545e6f', 
                background: '#f0f0f0' 
            }
        

    return (
        <nav className="navbar">
        
            <NavLink 
                to="/"
                style={navstyles}
                >
                Home
                </NavLink>
                
            <NavLink 
                to="/user"
                style={navstyles}
                >
                Profile
                </NavLink>
        </nav>
    )
}