import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext"

const Header = () => {
    const { credential, login } = useContext(AppContext)
    return (
        <nav>
            <h1>
                SHAPES
            </h1>

            <span onClick={() => login!("app.gmail.com", "12345")}>
                {credential? "Logout 🔒" : "Login 🔓"}
            </span>
        </nav>
    )
}


export default Header;