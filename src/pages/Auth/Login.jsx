import GuestLayout from "../../components/parts/GuestLayout";
import LoginForm from "../../components/forms/LoginForm";

export default function LoginPage({}) {
    return (
        <GuestLayout>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <LoginForm />
        </GuestLayout>
    )
}