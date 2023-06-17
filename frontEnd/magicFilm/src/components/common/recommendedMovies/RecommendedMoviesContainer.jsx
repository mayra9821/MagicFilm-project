import React, { useEffect, useState } from "react";
import RecommendedMovies from "./RecommendedMovies";
import "./RecommendedMovies.css";
import { getMovies } from "../../../service/productServices";
import { Pagination } from "@mui/material";

const RecommendedMoviesContainer = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [page, setPage] = useState(1);
  const resultsPerPage = 5;

  useEffect(() => {
    const movies = getMovies();
    movies
      .then((res) => {
        const dataMovies = res.data;
        dataMovies.sort(function () {
          return Math.random() - 0.5;
        });
        setDataMovies(dataMovies);
      })

      .catch((error) => console.log(error));
  }, []);

  //Cambio aleatorio del elementos del array

  const indexInitial = (page - 1) * resultsPerPage;
  const indexEnd = indexInitial + resultsPerPage;
  const moviesPage = dataMovies.slice(indexInitial, indexEnd);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <h2 className="titleRecommendedMovies">Películas Recomendadas</h2>
      <RecommendedMovies dataMovies={moviesPage} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={Math.ceil(dataMovies.length / resultsPerPage)}
          page={page}
          onChange={handleChangePage}
          size="large"
          showFirstButton
          showLastButton
          siblingCount={1}
          boundaryCount={1}
        />
      </div>
    </div>
  );
};

export default RecommendedMoviesContainer;