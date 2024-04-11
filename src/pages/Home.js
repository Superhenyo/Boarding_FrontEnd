import React, { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { Navigate } from 'react-router-dom'
import '../CSS/Home.css'
// import LandingPage from "../components/LandingPage";




function Home() {
    const { user } = useContext(UserContext);
    useEffect(() => {
        if (user.id !== null) {
            <Navigate to="/login" />;
        }
    }, [user]);


    return null
}
export default Home;

