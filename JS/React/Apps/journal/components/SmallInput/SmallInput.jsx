import "./SmallInput.css";

const SmallInput = (props) => {
    return (
        <>
            <input className="small__input" type={props.type} placeholder={props.placeholder} autoFocus={props.autofocus} />
        </>
    );
};
export default SmallInput;