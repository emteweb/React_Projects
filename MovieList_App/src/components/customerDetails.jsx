import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Customer: {id} </h1>;
    </div>
  );
};

export default CustomerDetails;
