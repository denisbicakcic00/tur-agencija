import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/layouts/searchbar';
import searchService from '@/services/search';
import { useRouter } from 'next/router';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { query } = router.query; // Dohvaćanje parametara pretrage iz URL-a

  const handleSearch = async (searchQuery) => {
    try {
      const res = await searchService.load(searchQuery);
      setSearchResults(res.data); // Pritisnite rezultate pretrage iz objekta res.data
      console.log(res.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch(searchQuery);
    console.log('Pretraga:', searchQuery);
  }, [searchQuery]);

  return (
    <>
    <SearchBar onSearch={handleSearch} value={searchQuery} onChange={handleInputChange} />
    {searchResults && (
      <div key={searchResults.id}>
        <h1>{searchResults.id}</h1>
      </div>
    )}
  </>
  );
};

export default Home;
