import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useApicall from "../utils/useApicall";
import { imageLink } from "../utils/constrain";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Menu = () => {
  const { resId } = useParams();
  const resMenu = useApicall(resId);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
    resMenu?.cards[2]?.card?.card?.info || {};

  const category =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
      return (
        e.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  const [showIndex, setShowIndex] = useState(null);

  if (!resMenu) {
    return <Shimmer />;
  }

  return (
    <div className="p-3 bg-sky-100 font-comic justify-center">
      <div className="flex items-center justify-center">
        <div className="flex mx-4 p-10">
          <img
            className="rounded-xl h-52 w-6/12"
            src={imageLink + cloudinaryImageId}
            alt="Restaurant"
          />
          <div className="main-details mx-5 text-3xl">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4>Rating: {avgRating} &#9733;</h4>
          </div>
        </div>
      </div>
      <div className="text-center">
        {category.map((e, index) => (
          <RestaurantCategory
            key={e.card.card.title}
            data={e.card.card}
            isExpanded={showIndex === index}
            onClick={() => setShowIndex(showIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
