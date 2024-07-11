import React, { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { LocationContext } from "../contexts/LocationContext";
import { FilterContext } from "../contexts/FilterContext";
import CuratorItem from "../components/Curator";
import Header from "../components/Header";
import Places from "../components/Places";
import Home from "../pages/Home";

const Routes = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState();
  return (
    <FilterContext.Provider value={{ filteredPlaces, setFilteredPlaces }}>
      <LocationContext.Provider value={{ city, setCity, state, setState }}>
        <Header />
        <Switch>
          <Route
            path="/:state/:city"
            element={
              <>
                <Home />
                <Places />
                <CuratorItem />
              </>
            }
          />
        </Switch>
      </LocationContext.Provider>
    </FilterContext.Provider>
  );
};

export default Routes;
