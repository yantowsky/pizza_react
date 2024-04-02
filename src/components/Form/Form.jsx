import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

const Form = () => {
    return (
        <form className="login-form">
            <Input type="text" placeholder="Your full name"/>
            <Button text="Login" type="submit" />
        </form>
    );
}

export default Form;