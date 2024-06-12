import { useState } from "react";
import ResMenuList from "./ResMenuList";

const RestaurantCategory = (props) => {

  const[showAccordion,setshowAccordion]=useState(false)

  const handleAccordion=()=>{
    setshowAccordion(!showAccordion)
  }

  return (
    <div className="w-6/12 m-auto my-0 p-3 shadow-lg">
      <div className="justify-between flex cursor-pointer" onClick={handleAccordion}>
        <span className="font-bold text-2xl">
          {props?.data?.title}-({props?.data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {showAccordion && <ResMenuList item={props?.data?.itemCards}/>}
      </div>
    </div>
  );
};
export default RestaurantCategory;
