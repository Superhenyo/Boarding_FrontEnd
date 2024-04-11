import { useContext, useEffect, useState } from "react";
// import UserContext from "../UserContext";
import { Container } from "react-bootstrap";


export default function Profile() {
    const [name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    // const { user } = useContext(UserContext);

    const token = localStorage.getItem('token')

    const userDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/users/getProfile`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setFullName(`${data.firstName} ${data.lastName}`)
                setEmail(data.email)
                setRole(data.role)
            })
    }
    useEffect(() => {
        userDetails();
    })
    return (
        <Container>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{role}</h1>

        </Container>
    )

}