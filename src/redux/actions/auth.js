import { login, register, checkToken as checkTokenService, logout as logoutService } from "../../services/auth";

export const authenticateUser = (payload) => (dispatch) => {
    login(payload)
        .then((res) => {
            if (res.token && res.user) {
                localStorage.setItem('token', res.token);
                dispatch({
                    type: 'user/setUser',
                    payload: {
                        ...res.user,
                        token: res.token
                    }
                });
            }
        })
        .catch((error) => {
            console.error("Login failed:", error);
        });
}

export const checkToken = () => (dispatch) => {
    checkTokenService(localStorage.getItem('token'))
        .then((res) => {
            if (res.user) {
                dispatch({
                    type: 'user/setUser',
                    payload: {
                        ...res.user,
                        token: localStorage.getItem('token')
                    }
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: 'user/clearUser'
            });
            console.error("Token validation failed:", error);
        });
}

export const registerUser = (payload) => (dispatch) => {
    register(payload)
        .then((res) => {
            console.log(user);
        })
        .catch((error) => {
            console.error("Registration failed:", error);
        });
}

export const logout = () => (dispatch) => {
    logoutService()
        .then(() => {
            localStorage.removeItem('token');
            dispatch({
                type: 'user/clearUser'
            });
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        });
}