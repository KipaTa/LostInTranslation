/**
 * Takes the translation from the ProfileHistory 
 * and creates a element with it.
 * @param {*} {translation} 
 * @returns translation inside a p tag.
 */
const ProfileHistoryItem = ({ translation }) => {
  return <p>{translation}</p>;
};

export default ProfileHistoryItem;
