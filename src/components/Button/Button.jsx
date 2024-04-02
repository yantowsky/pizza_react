const Button = (props) => {

    const { type, text = "Default", isDisable = false, onClick} = props;

    return (
        <button type={type} disabled={isDisable} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;