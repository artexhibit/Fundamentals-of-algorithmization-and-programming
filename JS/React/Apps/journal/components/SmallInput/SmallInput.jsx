import "./SmallInput.css";

const SmallInput = (props) => {
    return (
        <>
            <input className="small__input" type={props.type} name={props.name} placeholder={props.placeholder} autoFocus={props.autofocus} onChange={props.receiveInputsValue} />
        </>
    );
};
export default SmallInput;