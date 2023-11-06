import "./Input.css";

const Input = (props) => {
    return <input className={`input ${props.inputsColor}`} type={props.type} placeholder={props.placeholder} onChange={props.handleInputsChange} onBlur={props.handleInputsEndEditing} />;
};

export default Input;
