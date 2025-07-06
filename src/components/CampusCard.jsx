import React from "react";
import { Link } from "react-router";

const CampusCard = ({campus}) => {
    return(
        <Link
        to={`/campus/${campus.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="campus-card">
          <img
            src={campus.imageUrl}
            alt={campus.name}
            className="campus-image"
          />
          <h3>{campus.name}</h3>
          <p>{campus.address}</p>
        </div>
      </Link>
    );
}

export default CampusCard;