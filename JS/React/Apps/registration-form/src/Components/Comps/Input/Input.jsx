import "./Input.css";

const Input = (props) => {
    function handleEmailChange(e) {
        props.setEmail(e.target.value);
    }

    return <input type={props.type} placeholder={props.placeholder} onChange={handleEmailChange} />;
};

export default Input;
