import React from "react";

export default function Card(props) {
  let { resdetail } = props;
  const { name, locality, avgRating, cloudinaryImageId, cuisines, sla } =
    resdetail;
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push("⭐");
    }
    return stars.join("");
  };

  return (
    <div>
      <div className="card m-3" style={{ width: "20.6rem", cursor: "pointer" }}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className="card-img-top"
          alt=""
          style={{ height: "13rem" }}
        />
        <div className="card-body" style={{ height: "8rem" }}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{cuisines.join(" ")}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Rating: {avgRating} {renderStars(avgRating)}
          </li>
          <li className="list-group-item">Locality: {locality}</li>
          <li className="list-group-item">
            Delivery Time: {sla.deliveryTime} mins
          </li>
        </ul>
      </div>
    </div>
  );
}
