import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/userInfo";
import { storageSave } from "../../utils/storage";
import { useNavigate } from 'react-router-dom'
import { useUser } from "../../context/UserContext";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const StartupForm = () => {
  // Hooks
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  //Local state
  const [ loading, setLoading ] = useState(false)
  const [ apiError, setApiError ] = useState(null)

  //Side Effects
  useEffect(() => {
    if (user !== null){
      navigate('/profile')
    }
  }, [ user, navigate])

 // Event Handlers
  const onSubmit = async ({username}) => {
    setLoading(true)
    const [error, userResponse] = await loginUser(username)
    if (error !== null) {
      setApiError(error)
    }
    if (userResponse !== null){
      storageSave('translation-user', userResponse)
      setUser(userResponse)
    }
    setLoading(false)
  };


  // Render Functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null
    }
    if (errors.username && errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username && errors.username.type === "minLength") {
      return <span>Username has to be longer than 2 characters</span>;
    }
  })();

  return (
    <>
      <h2> Get Started</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="name"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit" disabled={ loading }>Continue</button>

        { loading && <p>Logging in...</p> }
        { apiError && <p>{ apiError }</p>}
      </form>
    </>
  );
};

export default StartupForm;
