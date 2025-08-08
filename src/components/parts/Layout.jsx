import AuthProvider from "../AuthProvider";
import Navbar from "../Navbar";

export default function Layout({ children, className = '' }) {
    return (
        <>
        <AuthProvider />
        <Navbar className="" />
        <div className={`p-5 ${className}`}>{children}</div>
        </>
    )
}