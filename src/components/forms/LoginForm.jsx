import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router";
import { authenticateUser } from "../../redux/actions/auth";
import Input from "../Input";

export default function LoginForm({}) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(authenticateUser(form));
    };

    useEffect(() => {
        if (user) {
            redirect("/");
        }
    }, [user]);

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
                type="password"
                placeholder="Password"
                value={form.password}
                className="mb-4"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
                Login
            </button>
        </div>
    )
}