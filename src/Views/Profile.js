import ProfileActions from "../Components/Profile/ProfileActions"
import ProfileHeader from "../Components/Profile/ProfileHeader"
import ProfileHistory from "../Components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"


const Profile = () => {

    const {user} = useUser()

    return(
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions/>
        <ProfileHistory translations = {user.translations}/>
        </>
    )
    
    }
    export default withAuth(Profile)