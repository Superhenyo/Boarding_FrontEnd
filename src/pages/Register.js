import { Container, Row, Col } from "react-bootstrap";
import "../CSS/LoginRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [isActive, setIsActive] = useState(false);

    const CreateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    role,
                }),
            });
            if (response.ok) {
                Swal.fire('Success', 'Registration successful!', 'success');
                navigate("/login");
            } else {
                Swal.fire('Error', 'Registration failed. Please try again later.', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'Registration failed. Please try again later.', 'error');
        }
    };

    return (
        <Container className="loginBackground">
            <Row className="loginContainer">
                <Col className="d-flex flex-column justify-content-center align-items-center"></Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <form className="form" onSubmit={CreateUser}>
                        <p className="title">Register </p>
                        <div className="flex">
                            <label>
                                <input
                                    required
                                    placeholder="Firstname"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="input"
                                />
                            </label>
                            <label>
                                <input
                                    required
                                    placeholder="Lastname"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="input"
                                />
                            </label>
                        </div>
                        <label>
                            <input
                                required
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input"
                            />
                        </label>
                        <label>
                            <input
                                required
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input"
                            />
                        </label>
                        <label>
                            <input
                                required
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="input"
                            />
                        </label>
                        <label>
                            <select
                                required
                                className="input"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="admin">admin</option>
                                <option value="border">border</option>
                            </select>
                        </label>

                        <button className="submit">Submit</button>
                        <p className="signin">
                            Already have an account?{" "}
                            <span className="sign-up-link" onClick={() => navigate("/login")}>
                                Signin
                            </span>{" "}
                        </p>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
