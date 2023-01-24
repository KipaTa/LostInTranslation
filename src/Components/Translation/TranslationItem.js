

const TranslationItem = (props) => {
    return (
       
            props.array.map((letter, index) => <img alt="" key={index + "-" + letter} src={`individial_signs/${letter}.png`} width="100"/>)
       
    )
}
export default TranslationItem