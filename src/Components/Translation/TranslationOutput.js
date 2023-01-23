import { addTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import TranslationInput from "./TranslationInput";

const TranslationOutput = () => {
    const {user, setUser} = useUser()

  const handleClick = async (notes) => {
		const [error, updatedUser] = await addTranslation(user, notes)
		if(error !== null ) {
			return 
		}

		storageSave(STORAGE_KEY_USER,updatedUser)
		setUser(updatedUser)

		console.log(error)
		console.log("Result" , updatedUser)

  };

  //const array = note.toString().split("");
  //const TranslationList = array.map((letter, index) => (<TranslationItem key={index + "-" + letter} src={`individial_signs/${letter}.png`}></TranslationItem>));
   
  return (
    <>
      <h1>Translation Output</h1>
      <TranslationInput onClick={handleClick}></TranslationInput>
    </>
  );
};

export default TranslationOutput;
