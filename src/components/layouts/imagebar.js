import React, {useState} from 'react';

const ImageBar = () => {

  const [droppedImages, setDroppedImages] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const images = files.filter((file) => file.type.startsWith('image/'));
    setDroppedImages(images);
  };

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin',
      }}
    >
      <img
        src="hawaii.jpg"
        alt="Slika 1"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="venice.jpg"
        alt="Slika 2"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="atena.jpg"
        alt="Slika 3"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="hawaii.jpg"
        alt="Slika 1"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="venice.jpg"
        alt="Slika 2"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="atena.jpg"
        alt="Slika 3"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="hawaii.jpg"
        alt="Slika 1"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="venice.jpg"
        alt="Slika 2"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
      <img
        src="atena.jpg"
        alt="Slika 3"
        style={{ height: 300, flexShrink: 0, marginRight: '10px' }}
      />
    </div>
  );
};

export default ImageBar;