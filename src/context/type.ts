export default interface ContextType {
    email: string
    credential: string,
    login?: (email: string, password:string) => void
}