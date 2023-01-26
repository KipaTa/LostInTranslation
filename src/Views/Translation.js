import TranslationOutput from "../Components/Translation/TranslationOutput"
import withAuth from "../hoc/withAuth"

// Translation page view
const Translation = () => {
  return (
    <>
      <TranslationOutput></TranslationOutput>
    </>
  )
}
export default withAuth(Translation)
