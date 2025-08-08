import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Layout from "./Layout";

export default function AuthLayout({ children, className = '' }) {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <Layout className={className}>
        {children}
        </Layout>
    )
}