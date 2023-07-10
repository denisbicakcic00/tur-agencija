const searchService = {
    load: async () => {
      try {
        const res = await fetch('/api/search/putovanja');
        const search = await res.json();
        return search;
      } catch (error) {
        throw new Error('Greška prilikom dohvata podataka');
      }
    },
  };

  

export default searchService