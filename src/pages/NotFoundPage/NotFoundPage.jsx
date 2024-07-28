import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      This page does not exist! <Link to="/">Click</Link>
    </div>
  );
};

export default NotFoundPage;
