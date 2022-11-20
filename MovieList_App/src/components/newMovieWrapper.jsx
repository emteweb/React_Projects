import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import NewMovieForm from "./newMovieForm";

const NewMovieWrapper = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return (
    <NewMovieForm navigate={navigate} location={location} {...props} id={id} />
  );
};

export default NewMovieWrapper;
