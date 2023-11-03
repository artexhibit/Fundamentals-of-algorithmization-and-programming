import "./Button.css"

const Button = (props) => {
    return (
        <button className="button" onClick={props.onClick}>{props.name}</button>  
    )
}

export default Button