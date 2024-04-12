import React, { useContext } from "react";
import UserContext from "../UserContext";
import '../CSS/Home.css'
import { Navigate } from "react-router-dom/dist";
// import LandingPage from "../components/LandingPage";




function Home() {
    const { user } = useContext(UserContext);
    return (
        <>
            {user.id === null ? (
                <Navigate to={"./login"} />
            )
                :
                (
                    <></>
                )

            }
        </>
    )
}
export default Home;

