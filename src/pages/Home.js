import React, { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
// import LandingPage from "../components/LandingPage";




function Home() {

    const { user } = useContext(UserContext);
    console.log(user.id)
    useEffect(() => {
    })
    const navigate = useNavigate();
    return (
        (user.id === null) ?
            <>
                {navigate('/login')}
            </>
            :
            <>

            </>
    )
}
export default Home;

