import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Add a translation to the user object. 
 * @param {*} user 
 * @param {*} note 
 * @returns [null, object] if success, else [errorMsg, null]
 */
export const addTranslation = async (user, note) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, note],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update!");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

/**
 * Clear user's translation history.
 * @param {*} userId 
 * @returns [null, object] if ok, else [errorMsg, null]
 */
export const clearTranslationHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update translations");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
