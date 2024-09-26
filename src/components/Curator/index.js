import React from "react";
import "./curador.scss";
import curatorPhoto from "../../images/joao-carlos.png";

function CuratorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto curador João Carlos Chavatte" />
      </div>
      <div className="curator__details">
        <div>
          <h3>João Carlos Chavatte</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          <ul>
            <li>Consultor em Segurança da Informação</li>
            <li>Desenvolvedor Web Full Stack</li>
            <li>
              CEO da <strong>Vexor – Soluções em TI</strong>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default CuratorItem;
