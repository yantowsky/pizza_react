import { createContext, useState } from "react";
import Input from "../Input/Input.jsx"
import LoginButton from "../Button/LoginButton.jsx";

export const FullNameContext = createContext();

const Form = () => {
    const [isFullName, setIsFullName] = useState("");
    
    return (
        <form className="login-form" method="get">
            <FullNameContext.Provider value={isFullName}>
                <Input type="text" placeholder="Your full name" value={isFullName} onChange={e => setIsFullName(e.target.value)} />
                <LoginButton />
            </FullNameContext.Provider>
        </form>
    );
}

export default Form;