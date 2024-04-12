import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import jennaImage from "../images/Bording Houses/jenna.png"; // Import the image

import '../CSS/Profile.css'

export default function Profile() {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [photo, setPhoto] = useState(false); // Set the initial value to the imported image

    const userDetails = () => {
        const token = localStorage.getItem('token');
        fetch(`${process.env.REACT_APP_API_URL}/users/getProfile`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setFullName(`${data.firstName} ${data.lastName}`);
                setEmail(data.email);
                setRole(data.role);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    useEffect(() => {
        userDetails();
    }, []);

    return (
        <Container>
            <Row >
                <Col className="d-flex">
                    <div className="profile-size">
                        {photo ? ( // Check if photo is truthy
                            <img src={photo} alt="profile" className="profile-size" />
                        ) : (
                            <AccountCircleIcon className="profile-icon" />
                        )}
                    </div>
                </Col>
                <Col>
                    
                    <h1>{name}</h1>
                    <h1>{email}</h1>
                    <h1>{role}</h1>
                </Col>
            </Row>
        </Container>
    );
}
