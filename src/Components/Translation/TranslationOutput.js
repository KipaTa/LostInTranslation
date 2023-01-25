import { useState } from "react";
import { addTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationInput from "./TranslationInput";
import TranslationItem from "./TranslationItem";
import { Card } from "@mui/material";

const TranslationOutput = () => {
  const { user, setUser } = useUser();
  const [letters, setLetters] = useState([]);

  const handleClick = async (notes) => {
    const [error, updatedUser] = await addTranslation(user, notes);
    if (error !== null) {
      return;
    }

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);

    const regExp = /[a-zA-Z]/g;

    if (regExp.test(notes)) {
      const array = notes.toLowerCase().match(/[a-z]/g);
      setLetters(array);
    }
  };

  return (
    <>
      <h1>Sign Away!</h1>
      <TranslationInput onClick={handleClick}></TranslationInput>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          sx={{
            minWidth: "50%",
            padding: 2,
            margin: 4,
            bgcolor: "#E7B355",
            borderRadius: "30px",
          }}
        >
          <TranslationItem array={letters} />
        </Card>
      </div>
    </>
  );
};

export default TranslationOutput;
