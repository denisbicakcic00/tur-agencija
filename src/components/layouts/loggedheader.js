import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import SearchBar from './searchbar';
import searchService from '@/services/search';

function LoggedHeader() {

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
    <header style={{height: '100px', backgroundColor: "#43AA8B"}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'stretch'}}>
          <Link href='/'> 
            <div style={{height: '90px', width: '35%', display: 'flex', alignItems: 'center'}}>
                <img src='/logo.png' alt='Logo' style={{height: 50}}></img>
                <h2 style={{color: 'white'}}>TURISTIČKA AGENCIJA</h2>
            </div>
          </Link>
            <div style={{height: '90px', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <SearchBar onSearch={handleSearch}/>
            </div>
            <div style={{height: '90px', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '10px'}}>
                <Link href='/users/profile'>
                  <img src='/profile.png' alt='Profil'></img>
                </Link>
            </div>
        </div>    
    </header>
  );
}

export default LoggedHeader;