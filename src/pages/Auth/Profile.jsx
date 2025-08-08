import AuthLayout from "../../components/parts/AuthLayout";
import LoginForm from "../../components/forms/LoginForm";
import { useSelector } from "react-redux";

export default function ProfilePage({}) {
    const { user } = useSelector(state => state.user);
    return (
        <AuthLayout>
            <h1 className="text-2xl font-bold mb-4">Bonjour, {user?.name}</h1>
            <div className="mt-4 bg-white rounded shadow p-4 overflow-auto">
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </AuthLayout>
    )
}