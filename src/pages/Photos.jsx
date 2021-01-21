import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Photos(props) {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef();
  const { place } = props;

  useEffect(() => {
    setLoading(true);
    setCurrentPhoto(0);
    axios
      .get(`https://travel-photos-jp.herokuapp.com/api/photos/${place}`)
      .then(({ data: { images } }) => {
        setPhotos(images);
        setLoading(false);
      });
  }, [place]);

  const atStart = currentPhoto === 0;
  const atEnd = currentPhoto === photos.length - 1;
  return (
    <div className="image-container">
      <button
        id="myBtn"
        className="p-button left-button"
        disabled={atStart}
        onClick={() => {
          setCurrentPhoto(currentPhoto - 1);
        }}
      >
        &#8249;
      </button>
      <button
        id="myBtn"
        className="p-button right-button"
        disabled={atEnd}
        onClick={() => {
          setCurrentPhoto(currentPhoto + 1);
        }}
      >
        &#8250;
      </button>
      {!loading && (
        <LazyLoadImage
          ref={imgRef}
          className="image"
          alt={photos[currentPhoto].label}
          effect="blur"
          key={photos[currentPhoto].url_tag}
          placeholderSrc={photos[currentPhoto].resized}
          src={`https://jp-travel-photos.s3.eu-west-2.amazonaws.com/${photos[currentPhoto].location}/${photos[currentPhoto].url_tag}`}
        ></LazyLoadImage>
      )}
    </div>
  );
}
