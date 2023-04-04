import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <h1>Página de contatos</h1>
            <button onClick={toggleTheme}>Mudar tema</button>
            <p>o tema é {theme}</p>
        </div>
    )
};

export default Contact;