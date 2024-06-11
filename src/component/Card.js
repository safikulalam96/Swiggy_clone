import React from "react";
import { imageLink } from "../utils/constrain";

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
      <div className="card m-3 p-2 border-green-500 border hover:scale-95 w-80 rounded-lg font-comic" >
        <img
          src={`${imageLink+cloudinaryImageId}`}
          className="w-full rounded-lg"
          alt=""
          style={{ height: "13rem" }}
        />
        <div className="mt-5 text-xl ">
          <h5 className="font-bold">{name}</h5>
          <p className="">{cuisines.join(" ")}</p>
        </div>

        <ul className="">
          <li className="">
            Rating: {avgRating} {renderStars(avgRating)}
          </li>
          <li className="">Locality: {locality}</li>
          <li className="">
            Delivery Time: {sla.deliveryTime} mins
          </li>
        </ul>
      </div>
    </div>
  );
 
}
