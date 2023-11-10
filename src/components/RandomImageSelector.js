import React, { useState, useEffect } from 'react';
import {
    MDBCardImage,
  } from 'mdb-react-ui-kit';
const RandomImageSelector = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const imageNames = Array.from({ length: 14 }, (_, index) => `${index + 1}.jpg`);
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    const selectedImage = imageNames[randomIndex];

    setRandomImage(selectedImage);
  }, []);

  return (
    <div>
      {randomImage && (
        <>
        {console.log(randomImage)}
        <MDBCardImage src={`/images/property/${randomImage}`} alt='Randomly selected' position='top'/>
        </>
      )}
    </div>
  );
};

export default RandomImageSelector;
