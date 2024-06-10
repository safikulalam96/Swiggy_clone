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
      <div className="p-3 bg-sky-100">
          <div className="flex">
            <span className="flex mx-4 ">
              <img
                src={imageLink + cloudinaryImageId}
                alt="Restaurant"
                style={{ height: "15rem", width: "15rem" }}
              />
              <div className="main-details mx-5 mt-9 text-4xl">
                <h1 className="">{name}</h1>
                <h3 className="">{cuisines?.join(", ")}</h3>
                <h3 className="">{costForTwoMessage}</h3>
                <h4 className="">Rating: {avgRating} &#9733;</h4>
              </div>
            </span>
          </div>
          <h2 className="text-center font-bold mt-5 text-3xl text-green-400">Recommended List</h2>
        <section className="flex items-center justify-center" >
          <div className="container mx-3 flex flex-wrap">
            {itemCards.map((item) => {
              const { id, name, description, price, defaultPrice, imageId } =
                item.card.info;
              return (
                <div key={id} className="p-4 border flex w-1/4 gap-6">
                  <div>
                    <img src={imageLink + imageId} alt="" className=""></img>
                    <h2 className="text-blue-800 font-bold text-4xl font-serif mt-6">
                      {name.replace("+", " ")}
                    </h2>

                    <h6 className="text-lg mt-9">{description}</h6>
                    <h4 className="text-green-600 font-bold">
                      Price: ₹{price ? price / 100 : defaultPrice / 100}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
