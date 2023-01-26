import { useForm } from "react-hook-form";
import { Button, TextField, Card, InputAdornment } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const translationConfig = {
  required: true,

  maxLength: 40,
};

const TranslationInput = ({ onClick }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ translation }) => {
    onClick(translation);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            minWidth: "50%",
            minHeight: "50%",
            padding: 2,
            bgcolor: "#E7B355",
            borderRadius: "30px",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-helperText"
              placeholder="What do you wanna sign?"
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
              {...register("translation", translationConfig)}
            />

            <br></br>

            <Button
              type="submit"
              variant="contained"
              sx={{
                ":hover": {
                  bgcolor: "#845EC2",
                  color: "white",
                },
                m: 2,
                fontSize:"20px",
                fontFamily: "LoveFont",
                bgcolor: "#845EC2",
              }}
            >
              Translate!
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default TranslationInput;
