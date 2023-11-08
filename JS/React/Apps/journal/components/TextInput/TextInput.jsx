import "./TextInput.css";

const TextInput = (props) => {
    return (
        <>
            <textarea className="text__input" placeholder={props.placeholder} name={props.name} onChange={props.receiveInputsValue}></textarea>
        </>
    );
};
export default TextInput;
