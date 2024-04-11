import React, { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { useNavigate } from 'react-router-dom'




function Home() {

    const { user } = useContext(UserContext);


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

