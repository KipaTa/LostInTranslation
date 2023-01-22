
const TranslationOutput = (input) => {
  const array = input.toString().split("");
  console.log(array);
  const translationList = array.map((letter, index) => (
    <img
      key={index + "-" + letter}
      alt=""
      src={`individial_signs/${letter}.png`}
    ></img>
  ));
  return (
    <>
      <h1>Translation Output</h1>
      {translationList}
    </>
  );
};

export default TranslationOutput;
