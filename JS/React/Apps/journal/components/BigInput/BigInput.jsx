import "./BigInput.css";

const BigInput = (props) => {
    return (
        <>
            <input className={props.className} type={props.type} placeholder={props.placeholder} autoFocus={props.autofocus} />
        </>
    );
};
export default BigInput;
