import "./BigInput.css";

const BigInput = (props) => {
    
    return (
        <>
            <input className="big__input" type={props.type} name={props.name} placeholder={props.placeholder} autoFocus={props.autofocus} onChange={props.receiveInputsValue} value={props.canEraseValue ? "" : props.currentValue} />
        </>
    );
};
export default BigInput;
