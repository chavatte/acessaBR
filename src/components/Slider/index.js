import React, { useState, useEffect, useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';
import api from '../../config/api';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);

function Slider() {
  const { filteredPlaces } = useContext(FilterContext);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await api.get(`?category_like=${filteredPlaces ? filteredPlaces : ''}`);

      if (result.status === 200) {
        setPlaces(result.data.places)
      }
    }

    fetchPlaces()
  }, [filteredPlaces])

  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      }}
    >
      {
        places.map(item => (
          <SwiperSlide key={item.id}>
            <Card key={item.id} item={item} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider;