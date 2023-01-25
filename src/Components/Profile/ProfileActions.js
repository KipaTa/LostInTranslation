import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { clearTranslationHistory } from "../../api/translation"
import { Button } from "@mui/material";

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
        <div>
            <Button 
                type="submit"
                variant="contained"
                sx={{
                  ":hover": {
                    bgcolor: "#845EC2",
                    color: "white",
                  },
                  m: 2,
                  fontFamily: "LoveFont",
                  bgcolor: "#845EC2",
                }}
                onClick={ handleClearHistoryClick }
                >Clear Translation History
            </Button>
            
            <Button 
                type="submit"
                variant="contained"
                sx={{
                  ":hover": {
                    bgcolor: "#845EC2",
                    color: "white",
                  },
                  m: 2,
                  fontFamily: "LoveFont",
                  bgcolor: "#845EC2",
                }}
                onClick={ handleLogout }
                >Logout
            </Button>
        </div>
    )
}

export default ProfileActions