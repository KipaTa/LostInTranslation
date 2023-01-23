import { useForm } from "react-hook-form";

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
      </>
      
    )
}

export default TranslationInput

