
const TranslationItem = (props) => {
    return (
        props.array.map((letter, index) => <img alt="" key={index + "-" + letter} src={`individial_signs/${letter}.png`}/>)
       
    )
}
export default TranslationItem