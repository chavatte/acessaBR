import React from "react";
import './curador.scss';
import curatorPhoto from '../../images/joao-carlos.png'

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
        <p>Especialista em infraestrutura, CEO da <strong>Vexor – Soluções em TI</strong>, iniciando meus estudos em WebDev pela <strong>Let´s Code</strong> e CyberOps pela <strong>Cisco</strong>.</p>
      </div>
    </div>
  )
}

export default CuratorItem;