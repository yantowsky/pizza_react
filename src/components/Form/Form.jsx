import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthUser.jsx";
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

const Form = () => {

    const { isFullName, setIsFullName, handleRedirectUser } = useContext(AuthContext);

    return (
        <form className="login-form">
            <Input type="text" placeholder="Your full name" value={isFullName} onChange={e => setIsFullName(e.target.value)} />
            <Button text="Login" type="submit" onClick={handleRedirectUser} />
        </form>
    );
}

export default Form;