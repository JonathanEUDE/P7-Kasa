import '../styles/Carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useRef, useState } from 'react';

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hasMoreThanOneImage, setHasMoreThanOneImage] = useState(false);

  useEffect(() => {
    movePicture();
    setHasMoreThanOneImage(images && images.length > 1);
  }, [currentImage, images]);

  const movePicture = () => {
    let x = document.getElementsByClassName('carousel-img');
    if (x && x.length > 0) {
      for (let i = 0; i < images.length; i++) {
        x[i].classList.remove('active');
      }
      x[currentImage].classList.add('active');
    }
  };

  const leftPicture = () => {
    if (currentImage > 0) setCurrentImage(currentImage - 1);
    else setCurrentImage(images.length - 1);
  };

  const rightPicture = () => {
    if (currentImage < images.length - 1) setCurrentImage(currentImage + 1);
    else setCurrentImage(0);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images &&
          images.map((image, idx) => (
            <img
              key={idx}
              className="carousel-img"
              src={image}
              alt={image}
            ></img>
          ))}
      </div>
      {hasMoreThanOneImage ? (
        <Fragment>
          <FontAwesomeIcon
            onClick={leftPicture}
            icon={faAngleLeft}
            className={`carousel-btn carousel-btn-left`}
          />
          <FontAwesomeIcon
            onClick={rightPicture}
            icon={faAngleRight}
            className={`carousel-btn carousel-btn-right`}
          />
          <span className="carousel-position">{`${currentImage + 1} / ${
            images.length
          }`}</span>
        </Fragment>
      ) : (
        ''
      )}
    </div>
  );
}

export default Carousel;
