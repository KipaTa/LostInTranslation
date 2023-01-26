import ProfileHistoryItem from "./ProfileHistoryItem";
import { Card } from "@mui/material";

/**
 * Displays the translations from the user to the profile page.
 */
const ProfileHistory = ({ translations }) => {
  //Iterates through the list of translations and calls the ProfileHistoryItem function.
  let translationList = translations.map((translation, index) => (
    <ProfileHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));
  //Only keeps the last ten translations on display
  translationList = translationList
    .slice(translations.length - 10, translationList.length)
    .reverse();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        variant="outlined"
        sx={{
          minWidth: "50%",
          minHeight: "50%",
          padding: 2,
          margin: 4,
          bgcolor: "#E7B355",
          borderRadius: "30px",
        }}
      >
        <h3> Your last 10 translations:</h3>
        <div>{translationList}</div>
      </Card>
    </div>
  );
};

export default ProfileHistory;
