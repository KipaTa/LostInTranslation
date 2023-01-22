import TranslationInput from "../Components/Translation/TranslationInput"
import TranslationOutput from "../Components/Translation/TranslationOutput"
import withAuth from "../hoc/withAuth"

const Translation = () => {
    return(
        <>
        <h3>Translation</h3>
        <TranslationInput></TranslationInput>
        <TranslationOutput></TranslationOutput>
        </>
    )
    
    }
    export default withAuth(Translation)