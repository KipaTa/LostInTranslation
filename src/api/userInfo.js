import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Checks if the user exists in the API already.
 * @param {*} username 
 * @returns [null, object] if exists, else [errorMsg, []]
 */
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    console.log(data);
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * Creates a new user to the API.
 * @param {*} username 
 * @returns [null, object] if exists, else [errorMsg, []]
 */
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * Checks if the user exists and then creates it if not.
 * @param {*} username 
 * @returns [null, object] if success, else [errorMsg, null]
 */
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return await createUser(username);
};

/**
 * fetching the user by it's id
 * @param {*} userId 
 * @returns [null, object] if success, else [errorMsg, null]
 */
export const userById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);
    if (!response.ok) {
      throw new Error("Could not fetch!");
    }
    const user = await response.json();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
