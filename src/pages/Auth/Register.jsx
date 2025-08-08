import Layout from "../../components/parts/Layout";
import RegisterForm from "../../components/forms/RegisterForm";

export default function RegisterPage({}) {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <RegisterForm />
        </Layout>
    )
}