import ProfileHistoryItem from "./ProfileHistoryItem"

const ProfileHistory = ({translations}) => {
    const translationList = translations.map(
        (translation, index) => <ProfileHistoryItem key={index + "-" +  translation} translation={translation} />)
    return (
        <section> 
            <h4> Your translation history</h4>
            <ul>{translationList}</ul>
        </section>
    )
}

export default ProfileHistory