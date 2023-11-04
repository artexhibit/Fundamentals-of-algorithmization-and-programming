import "./Input.css";

const Input = (props) => {

    function handleInputsChange(e) {
        props.setInputData((prevData) => ({
            ...prevData,
            [e.target.type]: e.target.value,
        }));
        validateInputs(e.target);
    }

    function validateInputs(e) {
        const validEmailPattern = /^(?=.{6,}$)\S+@\S+\.[a-zA-Z]{2,3}$/;
        const validPasswordPattern = /^(?=.*\d).+$/;
        let isValid = false;

        if (e.type === "email") {
            isValid = e.value.match(validEmailPattern) ? true : false;
        } else if (e.type === "text") {
            isValid = e.value.length > 6 ? true : false;
        } else if (e.type === "password") {
            isValid = e.value.match(validPasswordPattern) ? true : false;
        } else {
            isValid = e.value >= 18 ? true : false;
        }

        props.setIsInputGreen((prevData) => ({
            ...prevData,
            [e.type]: isValid,
        }));
    }

    return <input className={`input ${props.isInputGreen ? "green" : "red"}`} type={props.type} placeholder={props.placeholder} onChange={handleInputsChange} />;
};

export default Input;
