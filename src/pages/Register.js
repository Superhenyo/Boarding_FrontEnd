import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";
// import "../CSS/SignIn.css"


import '../CSS/LoginRegister.css'

export default function Register() {
    const [isLogin, setIsLogin] = useState(false);

    const toggleLoginMode = () => {
        setIsLogin(!isLogin);
    };


    return (
        <Container className="loginBackground">
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">

                </Col>
                <Col>
                    <form className="form-container">
                        <p className="title">Register </p>
                        <div className="form">
                            <label>
                                <input required="" placeholder="" type="text" className="input" />
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input required="" placeholder="" type="text" className="input" />
                                <span>Lastname</span>
                            </label>
                        </div>

                        <label>
                            <input required="" placeholder="" type="email" className="input" />
                            <span>Email</span>
                        </label>

                        <label>
                            <input required="" placeholder="" type="password" className="input" />
                            <span>Password</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="password" className="input" />
                            <span>Confirm password</span>
                        </label>
                        <button className="submit">Submit</button>
                        <p className="sign-up-label">
                            Don't have an account?
                            <span
                                className="sign-up-link"
                                onClick={toggleLoginMode}
                            >
                                Sign up
                            </span>
                        </p>
                    </form>
                </Col>

            </Row>

        </Container>

    )
}