import React, { useContext } from "react";
import '../CSS/Home.css'
import Login from "./login";
import UserContext from "../UserContext";




function Home() {
    const { user } = useContext(UserContext);

    return (
        (user.id === null) ?
            <>
                <Login/>
            </>
            :
            <>
            </>
    )
}
export default Home;

