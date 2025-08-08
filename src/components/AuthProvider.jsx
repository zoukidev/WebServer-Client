import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../redux/actions/auth";
import { redirect, useNavigate } from "react-router";

export default function AuthProvider({}) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkToken());
        }
    }, [dispatch]);
}