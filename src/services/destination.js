const destinationService = {
    load,
    show
}


async function load(){
    const res = await fetch('/api/destinations/load')
    const destinations = await res.json()

    return destinations
}

async function show(id) {
    const res = await fetch(`/api/destinations/show?id=${id}`);
    const destination = await res.json();
  
    return destination;
  }
  

export default destinationService