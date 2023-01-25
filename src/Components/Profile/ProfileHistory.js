import ProfileHistoryItem from "./ProfileHistoryItem"
import { Card } from "@mui/material";

const ProfileHistory = ({translations}) => {

    let translationList = translations.map(
        (translation, index) => <ProfileHistoryItem 
            key={index + "-" +  translation} 
            translation={translation} />)
    
    translationList = translationList.slice(translations.length - 10, translationList.length).reverse()

        return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Card 
                variant="outlined"
                sx={{
                  minWidth: 550,
                  minHeight: 450,
                  padding: 2,
                  margin: 4,
                  bgcolor: "#E7B355",
                  borderRadius: "30px",
                }}
            >
            <h3 sx={{ fontFamily: "LoveFont" }}> Your last 10 translations:</h3>
            <p>{translationList}</p>
            </Card>
        </div>
    )
}

export default ProfileHistory