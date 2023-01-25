import { useForm } from "react-hook-form";
import { Button, TextField, Card } from "@mui/material";


const translationConfig = {
  required: true,
  maxLength: 40,
};


const TranslationInput = ({onClick}) => {


    const { register, handleSubmit} = useForm()
 
    const onSubmit = ({translation}) => {
        onClick(translation)
    };

    return (
      <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <img src={'/Logo-Hello.png'} alt="LogoHello" className="logo2" />
        <Card variant="outlined" sx={{ maxWidth: 450, padding: 2 }}>
          
            <form onSubmit={handleSubmit(onSubmit)}>
              

              <TextField 
                  id="outlined-helperText"     
                  label="What do you wanna sign?"
                  variant="outlined"
                  size="small"
                  {...register("translation", translationConfig)}
                  />

                <br></br>

              <Button type="submit" variant="contained" sx={{m:2}} >Translate!</Button>
            </form>
        </Card>
        </div>
      </>
      
    )

}

export default TranslationInput
