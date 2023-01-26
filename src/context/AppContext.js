import UserProvider from "./UserContext"

//AppContect to merge all the contexts (only UserContext this time)
const AppContext = ({ children }) => {

    return (
        <UserProvider>
            { children }
        </UserProvider>
    )
}
export default AppContext