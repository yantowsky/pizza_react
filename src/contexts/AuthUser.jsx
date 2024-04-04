import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthUser = ({ children }) => {
    const [isFullName, setIsFullName] = useState("");

    const navigate = useNavigate();

    const handleRedirectUser = (event) => {
        const modFullName = isFullName.trim();
        event.preventDefault();
        if (!modFullName) {
            alert("Enter your full name");
        } else {
            console.log(`Your full name: ${modFullName}`);
            navigate('/menu');
        }
    }

    const contextValue = {
        isFullName,
        setIsFullName,
        handleRedirectUser
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthUser;