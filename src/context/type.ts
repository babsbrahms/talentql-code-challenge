export default interface ContextType {
    email: string
    token: string
    login?: (email: string, password:string) => void
    logout?: () => void 
}