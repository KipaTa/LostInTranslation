import { useEffect } from "react"
import { userById } from "../api/userInfo"
import ProfileActions from "../Components/Profile/ProfileActions"
import ProfileHeader from "../Components/Profile/ProfileHeader"
import ProfileHistory from "../Components/Profile/ProfileHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = () => {

    const {user, setUser} = useUser()

    useEffect(() => {
        const findUser = async () =>{
            const [error, latestUser] = await userById(user.id)
            if(error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        //findUser()
    }, [setUser, user.id])

    return(
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions />
        <ProfileHistory translations = {user.translations}/>
        </>
    )
    
    }
    export default withAuth(Profile)