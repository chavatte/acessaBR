import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  location: null,
  error: null,
});

export const UserProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error);
        }
      );
    } else {
      setError(new Error("Geolocalização não suportada pelo navegador."));
    }
  }, []);

  return (
    <UserContext.Provider value={{ location, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
