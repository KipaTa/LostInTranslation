import { useForm } from "react-hook-form";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const StartupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  const errorMessage = (() => {
    if (!errors.username){
        return null;
    }
    if (errors.username && errors.username.type === 'required'){
        return <span>Username is required</span>;
    }
    if (errors.username && errors.username.type === 'minLength'){
        return <span>Username has to be longer than 2 characters</span>
    }

  }) ()

  return (
    <>
      <h2> Get Started</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            placeholder="name"
            {...register("username", usernameConfig)}
          />
        {errorMessage}
        </fieldset>

        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default StartupForm;
