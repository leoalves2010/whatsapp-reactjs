import React from "react";
import "./styles.css";
import { Api } from "../../Api";

const Login = ({ handleLoginData }) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        result ? handleLoginData(result) : alert("Erro");
    };

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
        </div>
    );
};

export default Login;
