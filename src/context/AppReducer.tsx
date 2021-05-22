import ContextType from "./type"

type actions  = | { type: "LOGIN", payload: { email: string, credential: string}} | { type:"LOGOUT" }

let initState: ContextType = {
        email: "",
        credential: "",
}
const AppReducer = (state=initState, action: actions) => {
    switch (action.type) {
        case "LOGIN":

            return { ...state, email: action.payload.email, credential: action.payload.credential  }
    
        case "LOGOUT":
            return {...state, email: "", token: ""}
        default:
            return state
    }
}

export default AppReducer;