import "./Button.css"

const Button = (props) => {
    const buttonSetup = `button ${props.isDisabled ? "disabled" : ""}`
    return (
        <button className={buttonSetup} onClick={props.onClick}>{props.name}</button>  
    )
}

export default Button