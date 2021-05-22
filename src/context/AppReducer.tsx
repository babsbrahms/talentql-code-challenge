import ContextType from "./type"

type actions  = | { type: "LOGIN", payload: { email: string, token: string}} | { type:"LOGOUT" }

let initState: ContextType = {
        email: "",
        token: "",
}
const AppReducer = (state=initState, action: actions) => {
    switch (action.type) {
        case "LOGIN":

            return { ...state, email: action.payload.email, token: action.payload.token  }
    
        case "LOGOUT":
            return {...state, email: "", token: "" }
        default:
            return state
    }
}

export default AppReducer;