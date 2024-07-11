import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { getDistance } from "geolib";
import "swiper/css/pagination";
import "swiper/css";
import { FilterContext } from "../../contexts/FilterContext";
import UserContext from "../../contexts/UserContext";
import placesData from "../../api/places.json";
import Card from "../Card";

function Slider({ sortOrder }) {
  const { filteredPlaces } = useContext(FilterContext);
  const { location, error } = useContext(UserContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const filteredData = filteredPlaces
      ? placesData.places.filter((item) =>
          item.category.includes(filteredPlaces)
        )
      : placesData.places;

    if (location) {
      const sortedPlaces = filteredData
        .filter(
          (place) => place.location && place.location.lat && place.location.long
        )
        .map((place) => ({
          ...place,
          distance: getDistance(
            { latitude: location.latitude, longitude: location.longitude },
            {
              latitude: parseFloat(place.location.lat),
              longitude: parseFloat(place.location.long),
            }
          ),
        }))
        .sort((a, b) => {
          if (sortOrder === "distancia") {
            return a.distance - b.distance;
          } else if (sortOrder === "alfabetica") {
            return a.name.localeCompare(b.name);
          } else {
            return 0;
          }
        });

      setPlaces(sortedPlaces);
    } else if (error) {
      console.error("Erro ao obter a localização:", error.message);
    }
  }, [filteredPlaces, sortOrder, location, error]);

  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {places.map((item) => (
        <SwiperSlide key={item.id}>
          <Card key={item.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
