import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      router.push('/users/prikaz')
    }
  };

  return (
    <div style={{ height: '90px', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <input type='text' placeholder='Pretraži...' style={{ borderRadius: '10px', border: 'none', outline: 'none', padding: '5px', width: '100%' }} 
        value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={handleKeyDown} />
    </div>
  );
};

export default SearchBar;
