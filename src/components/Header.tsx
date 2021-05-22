import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext"

const Header = () => {
    const { token, login, logout } = useContext(AppContext)

    const authenticate = () => {
        if (token) {
            // login!(process.env.REACT_APP_EMAIL!, process.env.REACT_APP_PASSWORD!)
            login!("swewe", "sdsds")

        } else {
            logout!()
        }
    }

    return (
        <nav>
            <h1>
                SHAPES
            </h1>

            <span onClick={() => authenticate()}>
                {token? "Logout 🔒" : "Login 🔓"}
            </span>
        </nav>
    )
}


export default Header;