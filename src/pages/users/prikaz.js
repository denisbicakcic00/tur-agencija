import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/layouts/searchbar';
import searchService from '@/services/search';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = await searchService.load();
        setSearchResults(search);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (searchQuery) => {
    try {
      const res = await fetch(`/api/search/putovanja?destinacija=${searchQuery}`);
      const data = await res.json();
      setSearchResults(data);
      console.log(data)
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };  



  return (
    <>
      {searchResults && (
        <div key={searchResults.id}>
          {/* Prikaz detalja putovanja */}
        </div>
      )}
    </>
  );
};

export default Home;