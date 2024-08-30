import React from 'react';
import './Footer.css'; // Importa o arquivo CSS externo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <img src="/Logo.png" alt="Logo Tharseo" />
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="/conta">Conta</a></li>
              <li><a href="/acessar">Acessar</a></li>
              <li><a href="/criar-conta">Criar conta</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="/suporte">Suporte</a></li>
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
              <li><a href="/termos-e-condicoes">Termos e condições</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
