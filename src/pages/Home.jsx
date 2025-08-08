import { useEffect, useState } from "react";
import AuthLayout from "../components/parts/AuthLayout";
import { getUsers } from "../redux/actions/users";
import { getUsers as getUsersService } from "../services/users";

export default function HomePage({}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersService(localStorage.getItem('token'))
            .then(users => {
                setUsers(users);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <AuthLayout>
            <h1>Welcome to the C# WebServer Client</h1>
            <p>This is the home page of the client application.</p>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.username})</li>
                ))}
            </ul>
        </AuthLayout>
    )
}