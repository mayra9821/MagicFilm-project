import React from "react";

const cardMovie = ({ state }) => {
  let { title, gender, release, image, link } = state;

  return (
    <div className="card-preview">
      <img src={image} alt="" className="card-movie-img" />
      <div className="card-movie-info">
        <h3
          style={{
            fontWeight: 700,
          }}
        >
          Detalle de la película
        </h3>
        <br />

        <p>
          <b className="card-movie-title">Titulo: </b>
          {title}
        </p>

        <p>
          <b className="card-movie-title">Fecha de estreno: </b>
          {release}
        </p>
        <p>
          <b className="card-movie-title">Género: </b>
          {gender}
        </p>
        <b className="card-movie-title">Trailer: </b>
        {link && <a href={link}>Ver Trailer</a>}
      </div>
    </div>
  );
};

export default cardMovie;
