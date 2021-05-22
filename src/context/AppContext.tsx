import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import ContextType from "./type"
// interface ContextType {
//     email: string
//     credential: string,
//     login?: (email: string, password:string) => void
// }

interface ProviderType  {
    children: JSX.Element
}

const defautState: ContextType = {
    email: "",
    credential: ""
}

export const AppContext = createContext<ContextType >(defautState)

const AppProvider:React.FC<ProviderType> = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, defautState )

    const login =(email: string, password: string) => {
        dispatch({
            type: "LOGIN",
            payload: {
                email: email,
                credential: password
            }
        })
    }

    return (
        <AppContext.Provider value={{
            email: state.email,
            credential: state.credential,
            login
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;