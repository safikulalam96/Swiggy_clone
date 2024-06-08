import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Menu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const menuData = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" +
          resId
      );
      const json = await menuData.json();
      setResMenu(json.data);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };

  const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
    resMenu?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  if (!resMenu) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="resmenu min-h-full p-4">
        <div className="container text-center">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="Restaurant"
            style={{ height: "13rem" }}
          />
          <h1 className="">{name}</h1>
          <h3 className="">{cuisines?.join(", ")}</h3>
          <h3 className="">{costForTwoMessage}</h3>
          <h4 className="">Rating: {avgRating} &#9733;</h4>
        </div>
        <div className="container ">
          {itemCards.map((item) => {
            const { id, name, description, price } = item.card.info;
            return (
              <div
                key={id}
                className="menu-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-800 font-bold mt-2">
                  Price: ₹{price ? price / 100 : "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
