import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = () => {

    const {setUser} = useUser()

    const handleLogout = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogout }>Logout</button></li>
        </ul>
    )
}

export default ProfileActions