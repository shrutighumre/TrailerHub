/////////////////
// //Card.jsx
import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "./Modal";

function Card({ movie_name, actor_name, poster_link, video_url }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <a href="#">
          <img className="card-image" src={poster_link} alt={movie_name} />
        </a>
        <h2 className="card-title">{movie_name}</h2>
        <p>{actor_name}</p>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} title={movie_name}>
        {/* <img src={poster_link} alt={movie_name} style={{ width: "100%" }} /> */}
        {/* <p>{actor_name}</p> */}
        <div className="video-container">
          <iframe
            width="1000"
            height="550"
            src={video_url}
            title={movie_name}
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}

Card.propTypes = {
  movie_name: PropTypes.string,
  actor_name: PropTypes.string,
  poster_link: PropTypes.string,
  video_url: PropTypes.string,
};

Card.defaultProps = {
  movie_name: "More",
  actor_name: "Amazing actors",
  poster_link:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54qIClKtoUnvqQs61gxpsMWEFGsmgodDFCqIWV1x89RfUbvJytEOqa5w7d-zBTW3zF9g&usqp=CAU",
  video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Default video URL
};

export default Card;

////////////////////////////
