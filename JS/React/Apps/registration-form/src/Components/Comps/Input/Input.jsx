import "./Input.css";

const Input = (props) => {
    function handleInputsChange(e) {
        props.setInputData((prevData) => ({
            ...prevData,
            [e.target.type]: e.target.value,
        }));
        validateInputs(e);
    }

    //receive an input value on each user char insert and set the color of input based on validation
    function validateInputs(e) {
        const validEmailPattern = /^(?=.{6,}$)\S+@\S+\.[a-zA-Z]{2,3}$/;
        const validPasswordPattern = /^(?=.*\d).+$/;
        let inputColor = "";

        if (e.target.type === "email") {
            inputColor = e.target.value.match(validEmailPattern) ? "green" : "red";
        } else if (e.target.type === "text") {
            inputColor = e.target.value.length >= 6 ? "green" : "red";
        } else if (e.target.type === "password") {
            inputColor = e.target.value.match(validPasswordPattern) ? "green" : "red";
        } else {
            inputColor = e.target.value >= 18 ? "green" : "red";
        }

        props.setInputsColor((prevData) => ({
            ...prevData,
            [e.target.type]: inputColor,
        }));
        setInputGrey(e);
    }

    //when user end typing and clicked outside textfield
    function handleInputsEndEditing(e) {
        setInputGrey(e);
    }

    //make input grey which is a standard color for non-active input
    function setInputGrey(e) {
        if (e.target.value === "") {
            props.setInputsColor((prevData) => ({
                ...prevData,
                [e.target.type]: "grey",
            }));
        }
    }

    return <input className={`input ${props.inputsColor}`} type={props.type} placeholder={props.placeholder} onChange={handleInputsChange} onBlur={handleInputsEndEditing} />;
};

export default Input;
