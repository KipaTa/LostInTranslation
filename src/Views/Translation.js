import TranslationOutput from "../Components/Translation/TranslationOutput"
import withAuth from "../hoc/withAuth"

const Translation = () => {
    return(
        <>
        <h3>Translation</h3>
        <TranslationOutput></TranslationOutput>
        </>
    )
    
    }
    export default withAuth(Translation)