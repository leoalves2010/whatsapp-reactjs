import React from "react";
import "./styles.css";

const ChatIntro = () => {
    return (
        <div className="chatIntro">
            <img src="/images/intro-whatsapp.jpg" alt="Intro WhatsApp" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>
                O WhatsApp conecta ao seu telefone para sincronizar suas
                mensagens.
                <br />
                Para reduzir o uso de dados, conecte seu telefone a uma rede
                Wi-Fi.
            </h2>
        </div>
    );
};

export default ChatIntro;
