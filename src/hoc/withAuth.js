import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"


//withAuth checks if user has signed in. If signed, user is able to navigate forvard. 
//If not signed in or user logs out, user is returned to Startup page. 
const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth