import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/auth';
import { Link } from "react-router";

// Styles
const navBtnStyle = 'px-4 py-1 bg-gray-900 hover:bg-gray-900/80 rounded';

export default function Navbar({ className = '' }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    return (
        <nav className={`bg-gray-800 text-white px-4 py-2 flex items-center justify-between gap-2 ${className}`}>
            <Link to="/" className="">Home</Link>
            {/* Authenticated Nav */}
            {user && (
                <div className="flex items-center gap-2">
                    <Link to="/profile" className="hover:text-gray-300">{user.name}</Link>
                    <LogOut 
                        size={18} 
                        onClick={() => dispatch(logout())}
                        className="hover:text-gray-300 cursor-pointer" />
                </div>
            )}
            {/* LogOut Nav */}
            {!user && (
                <div className="flex items-center gap-2">
                    <Link to="/login" className={navBtnStyle}>Login</Link>
                    <Link to="/register" className={navBtnStyle}>Register</Link>
                </div>
            )}
        </nav>
    )
}