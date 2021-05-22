import ContextType from "./type"

interface actions { type: "LOGIN", payload: { email: string, credential: string}}

let initState: ContextType = {
        email: "",
        credential: "",
}
const AppReducer = (state=initState, action: actions) => {
    switch (action.type) {
        case "LOGIN":

            return { ...state, email: action.payload.email, credential: action.payload.credential  }
    
        default:
            return state
    }
}

export default AppReducer;