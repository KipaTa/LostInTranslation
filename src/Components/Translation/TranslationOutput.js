import { useState } from "react";
import { addTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationInput from "./TranslationInput";


const TranslationOutput = () => {
    const {user, setUser} = useUser()
		const [letters, setLetters] = useState([])

  const handleClick = async (notes) => {
		const [error, updatedUser] = await addTranslation(user, notes)
		if(error !== null ) {
			return 
		}

		storageSave(STORAGE_KEY_USER,updatedUser)
		setUser(updatedUser)

		const array = notes.toLowerCase().match(/[a-z]/g)
		setLetters(array)

		console.log(error)
		console.log("Result" , updatedUser)

  };
	
  return (
    <>
      <h1>Translation Output</h1>
      <TranslationInput onClick={handleClick} ></TranslationInput>
			
    </>
  );
};

export default TranslationOutput;