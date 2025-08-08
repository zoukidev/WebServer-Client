export const login = async (credentials) => {
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};

export const checkToken = async (token) => {
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/check-token`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Token validation failed");
    }

    return response.json();
};

export const register = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Registration failed");
    }

    return response.json();
};

export const logout = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/logout`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new Error("Logout failed");
    }

    return response.json();
};