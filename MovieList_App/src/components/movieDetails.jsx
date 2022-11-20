import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  return (
    <div>
      <h1>Details: {id}</h1>
      <button
        onClick={() => navigateTo("/movies")}
        className="btn btn-danger btn-sm"
      >
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
