import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAINAPI } from "../utils/constrain";
import useOnlinestatus from "../utils/useOnlinestatus";

export default function Body() {
  const [reslist, setreslist] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const [filteredRestaurant, setfilterRestaurant] = useState([]);
  const online = useOnlinestatus();

  useEffect(() => {
    apicall();
  }, []);
  
  let apicall = async () => {
    let data = await fetch(MAINAPI);
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
  if (online === false) {
    return (
      <h1>Oops looks like You are offline, connect to network and Try again</h1>
    );
  }
  if (reslist?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-sky-100">
      <div className="items-center justify-center flex">
        <input
          className="p-2 border-green-500 border bg-sky-100 font-bold rounded-xl ... hover:bg-white"
          type="text"
          value={searchbox}
          onChange={(e) => {
            setsearchbox(e.target.value);
          }}
        ></input>
        <button
          className="border p-2 rounded-xl ...  bg-sky-100 hover:bg-white  border-green-500"
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
        <button
          className="m-4 rounded-xl ...bg-sky-100 p-2 hover:bg-white border-green-500 border"
          onClick={handlefilter}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((e) => {
          return (
            <Link key={e.info.id} to={"/restaurant/" + e.info.id}>
              <Card resdetail={e.info} orderlink={e.cta.link} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
