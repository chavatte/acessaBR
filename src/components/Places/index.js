import React, { useContext, useState } from "react";
import Slider from "../Slider";
import "./places.scss";
import { FilterContext } from "../../contexts/FilterContext";

const Places = () => {
  const { filteredPlaces } = useContext(FilterContext);
  const [sortOrder, setSortOrder] = useState("distancia");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          {filteredPlaces ? filteredPlaces : "Locais"}
          <span> Acessíveis</span>
        </h2>
        <div className="places__select">
          <h5>Ordenar por:</h5>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="distancia">Distância</option>
            <option value="alfabetica">Nome</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider sortOrder={sortOrder} />
      </div>
    </section>
  );
};

export default Places;
