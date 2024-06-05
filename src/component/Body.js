import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

export default function Body() {
  const [reslist, setreslist] = useState([]);
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
  };

  const handlefilter = () => {
    const filteredList = reslist.filter((e) => e.info.avgRating > 4.5);
    setreslist(filteredList);
  };

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <button className="m-4 btn btn-info" onClick={handlefilter}>
        Best Rating
      </button>
      <div className="d-flex flex-wrap">
        {reslist.map((e) => {
          return <Card key={e.info.id} resdetail={e.info} />;
        })}
      </div>
    </div>
  );
}
