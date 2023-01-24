import { createHeaders } from ".";
const apiUrl = process.env.REACT_APP_API_URL;

export const addTranslation = async (user, note) => {
  try {
    console.log(user.id)
    const response = await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [...user.translations, note]
        })
    })
    if(!response.ok){
        throw new Error ("Could not update!")
    }
    const result = await response.json()
    return [null, result]
  } catch (error) {
    return [error.message, null]
  }
};


export const clearTranslationHistory = async (userId) => {
  try {
       const response = await fetch(`${apiUrl}/${userId}`, {
          method: 'PATCH',
          headers: createHeaders(),
          body: JSON.stringify({
              translations: []
          })
      })
      if(!response.ok) {
        throw new Error('Could not update translations')
      }
      const result = await response.json()
      return [ null, result]
  } catch (error) {
      return [error.message, null]
  }
};
