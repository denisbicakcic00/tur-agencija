import destinationService, {load} from '@/services/destination';
import React, {useEffect, useState} from 'react';

const ImageBar = () => {

  const [destination, setDestination] = useState();
  async function getDestination(){
    const {data} = await destinationService.load()
    setDestination(data)
  }
  useEffect(()=> {
    getDestination()
  }, [])

  /* const [droppedImages, setDroppedImages] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  }; 

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const images = files.filter((file) => file.type.startsWith('image/'));
    setDroppedImages(images);
  }; */


  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin',
      }}
    >
      {destination?.map(destination => (

     
      <div key={destination.id}>
        <a href={`/users/destinacija/${destination.id}/destinacija`}>
        <img 
        src={destination.slika_url}
        alt="Slika 1"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      </a>
    </div>
 ))}

    </div>
  );
};

export default ImageBar;