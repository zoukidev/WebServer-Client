import { getUsers as getUsersService } from "../../services/users";

export const getUsers = () => async (dispatch, useSelector) => {
    const user = useSelector(state => state.user.user);

    if (!user || !user.token) {
        throw new Error("No token found");
    }

    await getUsersService(user.token)
        .then(users => {
            console.log("Fetched users:", users);
            dispatch({ type: "user/setUsers", payload: users });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
};
