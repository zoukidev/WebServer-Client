export const getUsers = async (token) => {
    return fetch(`${import.meta.env.VITE_API_ENDPOINT}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(response => response.json());
};
