import React from 'react';

const Home = () => {
  return (
    <div>
      <img
        src={
          'https://jp-travel-photos.s3.eu-west-2.amazonaws.com/visited-countries.jpg'
        }
        alt={"Countries I've visited"}
        className="image"
      ></img>
    </div>
  );
};

export default Home;
