import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <div className="asset-container">
      <img src="/Link.png" alt="automatizar" />
      <h1>Compre e  <br /> venda ativos</h1>
      <p>
        Com o <strong>THARSEO</strong> você não precisa se preocupar com a compra e venda de
        <br />  ativos, basta configurar uma vez e acompanhar na sua plataforma.
      </p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Comece selecionando os ativos que deseja acompanhar"
        />
        <button className="buy-button">COMPRAR</button>
      </div>
      <img src="/dashboard.png" alt="dashboard" width={980} height={340} />
      <button className="start-button">COMEÇAR</button>
    </div>
  );
};

export default Main;
