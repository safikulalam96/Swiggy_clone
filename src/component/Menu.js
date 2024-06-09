import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useApicall from "../utils/useApicall";
import { imageLink } from "../utils/constrain";

const Menu = () => {
  const { resId } = useParams();
  const resMenu = useApicall(resId);

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
      <div className="resmenu p-3">
        <div className="container  ">
          <span className="d-flex mx-4 ">
            <img
              src={imageLink + cloudinaryImageId}
              alt="Restaurant"
              style={{ height: "15rem", width: "15rem" }}
            />
            <div className="main-details mx-5 my-3">
              <h1 className="">{name}</h1>
              <h3 className="">{cuisines?.join(", ")}</h3>
              <h3 className="">{costForTwoMessage}</h3>
              <h4 className="">Rating: {avgRating} &#9733;</h4>
            </div>
          </span>
        </div>
        <div className="container">
          <h2 className="mx-4 my-5">Menu List</h2>
          {itemCards.map((item) => {
            const { id, name, description, price, defaultPrice } =
              item.card.info;
            return (
              <div key={id} className="p-4 ">
                <h2 className="text-primary">{name.replace("+", " ")}</h2>
                <h6 className="text-primary-emphasis">{description}</h6>
                <h4 className="text-success">
                  Price: ₹{price ? price / 100 : defaultPrice / 100}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
