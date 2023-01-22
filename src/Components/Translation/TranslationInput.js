import { useForm } from "react-hook-form";
import TranslationOutput from "./TranslationOutput";


const translationConfig = {
    required: true,
    maxLength: 40,
  };
  

const TranslationInput = () => {

    const { register, handleSubmit} = useForm()
 
    const onSubmit = (data) => {
        const input = data.translation
        TranslationOutput(input)
        console.log(data);
    };

    return (
        <>
        <h2> Get Started</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <input
              type="text"
              placeholder="What do you wanna sign?"
              {...register("translation", translationConfig)}
            />
          </fieldset>
  
          <button type="submit">Translate!</button>
        </form>

        <section>

        </section>
      </>
      
    )
}

export default TranslationInput

