import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { clearTranslationHistory } from "../../api/translation"

const ProfileActions = () => {

    const {user, setUser} = useUser()

    const handleLogout = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm("Are you sure?\nThis can not be undone!")) {
            return
        }
        const [ clearError ] = await clearTranslationHistory(user.id)

        if (clearError !== null) {
            return
        }
        
        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave( STORAGE_KEY_USER , updatedUser)
        setUser(updatedUser)
    }

    return (
        <ul>
            <li><button onClick={ handleLogout }>Logout</button></li>
        </ul>
    )
}

export default ProfileActions