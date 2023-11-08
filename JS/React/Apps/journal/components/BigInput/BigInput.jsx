import "./BigInput.css";

const BigInput = (props) => {
    return (
        <>
            <input className="big__input" type={props.type} placeholder={props.placeholder} autoFocus={props.autofocus} />
        </>
    );
};
export default BigInput;
