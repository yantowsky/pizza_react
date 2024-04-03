import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FullNameContext } from "../Form/Form";

const LoginButton = () => {
    const navigate = useNavigate();
    const isFullName = useContext(FullNameContext);

    const handleRedirectUser = (event) => {
        event.preventDefault();
        if (!isFullName.trim()) {
            alert("Enter your full name");
        } else {
            console.log(`Your full name: ${isFullName}`);
            navigate('/menu');
        }
    }

    return (
        <button type="submit" onClick={handleRedirectUser}>
            Login
        </button>
    );
}

export default LoginButton;