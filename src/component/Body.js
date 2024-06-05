import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

export default function Body() {
  const [reslist, setreslist] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const [filteredRestaurant, setfilterRestaurant] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  let apicall = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let ans = await data.json();
    setreslist(
      ans?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      ans?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handlefilter = () => {
    const filteredList = reslist.filter((e) => e.info.avgRating > 4.5);
    setfilterRestaurant(filteredList);
  };

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        className="mx-3"
        type="text"
        value={searchbox}
        onChange={(e) => {
          setsearchbox(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          var filtersearch = reslist.filter((item) => {
            return item.info.name
              .toLowerCase()
              .includes(searchbox.toLowerCase());
          });
          setfilterRestaurant(filtersearch);
        }}
      >
        Search
      </button>
      <button className="m-4 btn btn-info" onClick={handlefilter}>
        Top Rated
      </button>
      <div className="d-flex flex-wrap">
        {filteredRestaurant.map((e) => {
          return <Card key={e.info.id} resdetail={e.info} />;
        })}
      </div>
    </div>
  );
}
