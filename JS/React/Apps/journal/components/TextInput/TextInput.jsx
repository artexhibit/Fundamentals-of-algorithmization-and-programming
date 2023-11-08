import "./TextInput.css";

const TextInput = (props) => {
    return (
        <>
            <textarea className="text__input" placeholder={props.placeholder}></textarea>
        </>
    );
};
export default TextInput;
