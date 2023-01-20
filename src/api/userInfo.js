import { createHeaders } from "."

const apiKey =  process.env.REACT_APP_API_KEY
const apiUrl =  process.env.REACT_APP_API_URL


const checkForUser = async (username) => {
    try{
        console.log("username from check " + username)
        const response = await fetch(`${apiUrl}?username=${username}`)
        console.log(response);
        if(!response.ok){
            throw new Error('Could not complete request.')
        }
        const data = await response.json();
        console.log(data);
        return [null, data]
    }
    catch (error) {
        return [error.message, [] ] 
    }
}

const createUser =  async (username) => {
    try{
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: [] 
            })
        })
        if(!response.ok){
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, [] ]
    }
}

export const loginUser = async (username) => {
<<<<<<< HEAD
    console.log("Username from loginUser: " + username)
    const [checkError, user] = await checkForUser(username)
=======
    const [checkError, user] = await checkForUser(username) 
>>>>>>> 627ec2e8e0cbeba68993a3f94885bebbad04122f

    if(checkError !== null) {
        return [ checkError, null ]
    }

    if(user.length > 0){
        return [null, user.pop()]
    }
    
    return await createUser(username)

}