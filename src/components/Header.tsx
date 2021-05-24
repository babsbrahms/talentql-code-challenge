import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import loginIcon from "../utils/login.svg"
import logoutIcon from "../utils/logout.svg"

const Header = () => {
    const { token, login, logout } = useContext(AppContext)

    const authenticate = () => {
        if (!token) {
            login!(process.env.REACT_APP_EMAIL!, process.env.REACT_APP_PASSWORD!)
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
                {token? `Logout` : `Login`} {"  "} <img className={"auth-icon"} src={token? logoutIcon: loginIcon} />
            </span>
        </nav>
    )
}


export default Header;