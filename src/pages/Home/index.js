import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './home.scss';
import imageDestack from '../../images/imagem-destaque.png';
import { FilterContext } from '../../contexts/FilterContext';
import Pills from '../../components/Pills'
import { LocationContext } from '../../contexts/LocationContext';

const PLACES = [
  'Locais',
  'Praças',
  'Parques',
  'Igrejas',
  'Hoteis',
  'Museus',
  'Mercados',
  'Zoológicos',
  'Restaurantes',
  'Farmácias',
  'lojas',   
]

const Home = () => {
  const { city, state } = useParams();
  const {setCity, setState} = useContext(LocationContext);
  const {filteredPlaces, setFilteredPlaces} = useContext(FilterContext);
  const handFilterPlace = (item) => {
    if(item === filteredPlaces){
      setFilteredPlaces('')
      return
    }
    setFilteredPlaces(item)
  }
  useEffect(() => {
    setCity(city)
    setState(state)
  }, [city, state]);
  
  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">{city} para todos</h1>
        <div className="home__image home__image--destack hide-desktop">
          <img src={imageDestack} alt="Imagem destaque cadeirante" />
        </div>
        <p className="home__text">Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas que buscam alternativas culturais para sair de casa, com a mobilidade que todo cidadão precisa.</p>
        <p className="home__text">Checamos 10 itens essenciais de acessibilidade para pessoas com deficiência em diversos pontos da cidade.</p>
        <div className="home__pills">
          {
            PLACES.map((item) => (

              <Pills
                local={item}
                selected={filteredPlaces === item}
                onClick={ () => handFilterPlace(item)}
              />
            ))
          }

        </div>
      </div>
      <div className="home__col">
        <div className="home__image home__image--destack hide-mobile">
          <img src={imageDestack} alt="Imagem destaque cadeirante" />
        </div>
      </div>
    </main>
  )
}

export default Home;