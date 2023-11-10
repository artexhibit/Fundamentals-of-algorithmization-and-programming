import "./TextInput.css";

const TextInput = (props) => {
    return (
        <>
            <textarea className="text__input" placeholder={props.placeholder} name={props.name} onChange={props.receiveInputsValue} value={props.canEraseValue ? "" : props.currentValue}></textarea>
        </>
    );
};
export default TextInput;
