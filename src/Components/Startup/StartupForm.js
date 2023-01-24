import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/userInfo";
import { storageSave } from "../../utils/storage";
import { useNavigate } from 'react-router-dom'
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import * as React from 'react';
import { TextField, Button, Card } from "@mui/material";

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
      storageSave(STORAGE_KEY_USER, userResponse)
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
  <div style={{ display: 'flex', justifyContent: 'center'}}>
  <Card variant="outlined" sx={{ maxWidth: 450, padding: 2 }}>
      <div className="startUpDiv"> 
        <div>
          <img src={'/Logo.png'} alt="Logo" className="logo" />
        </div>

        <div>
          <h2> Get Started</h2>
        </div>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className="inputForm">
            <h4>Give your username:</h4>
            <TextField 
              id="outlined-helperText"     
              label="username"
              variant="outlined"
              size="small"
              {...register("username", usernameConfig)}
              />

            <br/>
              {errorMessage}
            <br/>

          <Button type="submit" variant="contained" sx={{m:4}} disabled={ loading }>Continue</Button>
      
          { loading && <p>Logging in...</p> }
          { apiError && <p>{ apiError }</p>}
        </form>
      </Card>
      </div>
    </>
  );
};

export default StartupForm;
