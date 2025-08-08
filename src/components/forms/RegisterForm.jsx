import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import Input from "../Input";

export default function RegisterForm({}) {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(form));
    };

    return (
        <div className="">
            <Input
                type="text"
                placeholder="Username"
                value={form.username}
                className="mb-4"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <Input
                type="text"
                placeholder="Fullname"
                value={form.name}
                className="mb-4"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
                type="password"
                placeholder="Password"
                value={form.password}
                className="mb-4"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
                Register
            </button>
        </div>
    )
}