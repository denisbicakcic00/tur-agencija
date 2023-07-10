import { useState, useEffect } from 'react';

const useIsLogged = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Provjera postojanja tokena u Local Storage-u
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return isLogged;
};

export default useIsLogged;
