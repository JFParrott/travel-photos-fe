import React from 'react';

export default function About() {
  return (
    <div id="about-container">
      <img
        src={`https://jp-travel-photos.s3.eu-west-2.amazonaws.com/IMG_20191018_101228_664.jpg`}
        alt={'Jonathan Parrott'}
        className="about-image"
      ></img>
      <p id="about-p">
        Hi!
        <br />
        <br />
        Welcome to my travel photography website and thanks for taking a look.
        <br />
        <br />
        This website came to fruition as a result of a passion for software
        development, travel and photography. Having spent over 18 months solo
        travelling various parts of the world, and with hundreds of photographs
        to showcase, building a home for those photographs seemed instinctual.
        <br />
        <br />
        The site was built using React.js, whilst communicating with an API
        which serves up image information from a PostgresQL database. The images
        are stored via AWS S3 and progressive image loading was used due to the
        large file size of the images.
        <br />
        <br />
        If you would like to see more of my software development work then
        please visit my portfolio at: <br />
        <a href="https://jonathanparrott.co.uk">jonathanparrott.co.uk</a>
        <br />
        <br />
        Thanks again and I hope you enjoy!
        <br />
        <br />
        Photo: Himalayas (approx. 5,200m)
      </p>
    </div>
  );
}
