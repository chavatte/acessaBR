import React, { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { LocationContext } from '../contexts/LocationContext';
import { FilterContext } from "../contexts/FilterContext";
import Home from "../pages/Home";
import Header from "../components/Header";
import CuratorItem from '../components/Curator';
import Places from '../components/Places';
import { Fragment } from "react/cjs/react.production.min";

const Routes = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState();
  return (
    <FilterContext.Provider value={{ filteredPlaces, setFilteredPlaces }}>
      <LocationContext.Provider value={{ city, setCity, state, setState }}>
        <Header />
        <Switch>
          <Route path="/:state/:city" element={
            <Fragment>
              <Home />
              <Places />
              <CuratorItem />
            </Fragment>
          }
          />
        </Switch>
      </LocationContext.Provider>
    </FilterContext.Provider>
  )
}

export default Routes;