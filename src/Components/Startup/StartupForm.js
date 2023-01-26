import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/userInfo";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import * as React from "react";
import { TextField, Button, Card, InputAdornment } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const usernameConfig = {
  required: true,
  minLength: 3,
};

/**
 * Handles the login page functions.
 */
const StartupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //Navigates to the translation page aster login
  useEffect(() => {
    if (user !== null) {
      navigate("/translation");
    }
  }, [user, navigate]);

  //Handles the submit of the login form.
  const onSubmit = async ({ username }) => {
    setLoading(true);

    const [error, userResponse] = await loginUser(username);

    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  //Shows the possible error messages from the input
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card 
          variant="outlined"
          sx={{
            minWidth: 400,
            minHeight: 200,
            padding: 2,
            bgcolor: "#E7B355",
            borderRadius: "30px",
            alignItems: "center",
          }}
          >
          <div className="startUpDiv">
            <div>
              <img src={"/Logo-Hello.png"} alt="Logo" className="logo" />
            </div>

            <div>
              <h2> Get Started</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="inputForm">
            
            <TextField
              id="outlined-helperText"
              placeholder="What is your name?"
              variant="outlined"
              size="medium"
              fullWidth
              margin="normal"
              style={{
                backgroundColor: "#EFEFEF",
                borderRadius: "15px",
                borderColor: "#E7B355",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardIcon />
                  </InputAdornment>
                ),
              }}
              {...register("username", usernameConfig)}
            />

            <br />
            {errorMessage}
            <br />

            <Button
              type="submit"
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "#845EC2",
                  color: "white",
                },
                m: 4,
                fontSize:"20px",
                fontFamily: "LoveFont",
                bgcolor: "#845EC2",
              }}
              disabled={loading}
            >
              Continue
            </Button>

            {loading && <p>Logging in...</p>}
            {apiError && <p>{apiError}</p>}
          </form>
        </Card>
      </div>
    </>
  );
};

export default StartupForm;
