import React from "react";
import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <ul>
      <li>
        <Link to={`/customers/1`}>Customer 1</Link>
      </li>
      <li>
        <Link to="/customers/2">Customer 2</Link>
      </li>
      <li>
        <Link to="/customers/3">Customer 3</Link>
      </li>
    </ul>
  );
};

export default Customers;
