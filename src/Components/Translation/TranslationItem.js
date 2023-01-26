/**
 * Iterates trough a list of letters and creates a img element for each.
 * @param {*} props input in array of letters
 * @returns img element
 */
const TranslationItem = (props) => {
  return props.array.map((letter, index) => (
    <img
      alt=""
      key={index + "-" + letter}
      src={`individial_signs/${letter}.png`}
      width="100"
    />
  ));
};
export default TranslationItem;
