import { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'

export default function Logout() {
    const { unsetUser, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        unsetUser();
        setUser({
            id: null,
            isAdmin: null
        })
        navigate('/')
    }

    useEffect(() => {
        swal.fire({
            title: 'Logout',
            text: "Are you sure to Log Out?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            cancelButtonColor: 'Red',
            confirmButtonColor: 'Green'
        }).then((result) => {
            if (result.isConfirmed) {
                handleLogout();
            } else {
                navigate('/')
            }
        })
    }, [navigate])

    return null;
}