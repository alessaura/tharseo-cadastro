import React from 'react';
import './Main.css';
import Card from '../Dashboard/Card';



const Main = () => {
  return (
    <>
      <div className="asset-container">
        <img src="/Link.png" alt="automatizar" />
        <h1>Compre e <br /> venda ativos</h1>
        <p>
          Com o <strong>THARSEO</strong> você não precisa se preocupar com a compra e venda de
          <br /> ativos, basta configurar uma vez e acompanhar na sua plataforma.
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

      <div className="container-2">
        <p className="freedom-text">
          Liberdade <br /> <strong>de escolha</strong>
        </p>
        <img src="/dashboard-2.png" alt="painel de automação" width={773} height={588} />
        <p className="description">
          Criptomoedas populares como Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Solana (SOL) e muitos outros tokens. 
          A plataforma oferece mercados de spot, futuros, margens, NFTs, entre outros. Além das principais criptomoedas, 
          listagem de novos tokens regularmente, permitindo que os usuários participem de lançamentos e de novas oportunidades no mercado de criptoativos.
        </p>
      </div>

      <div className="container-3">
        <h2>Aumente seus ganhos com automação de trading!</h2>
        <p className="description">
          Automatize suas estratégias de compra e venda para capturar oportunidades 24/7. 
          Experimente nossa plataforma hoje e maximize seus lucros sem esforço manual.
        </p>
        <button className="cta-button">CRIAR CONTA</button>
      </div>

      <div className="app">
    <Card
      title="Variedade e liberdade"
      text="Escolha entre um catálogo repleto de ativos."
      icon={<span className="icon icon-folder" />}
    />
    <Card
      title="Rapidez e segurança"
      text="Transações seguras e com acompanhamento fácil"
      icon={<span className="icon icon-fast-forward" />}
    />
    <Card
      title="Liberdade de escolha"
      text="Escolha na plataforma o que é relevante para você"
      icon={<span className="icon icon-check" />}
    />
  </div>
);
    </>
  );
};

export default Main;
