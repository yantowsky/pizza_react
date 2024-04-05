const Button = (props) => {

    const {className, type, text = "Default", isDisable = false, onClick} = props;

    return (
        <button className={className} type={type} disabled={isDisable} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;