import ResMenuList from "./ResMenuList";

const RestaurantCategory = (props) => {
//   console.log(props);

  return (
    <div className="w-6/12 m-auto my-0 p-3 shadow-lg">
      <div className="justify-between flex ">
        <span className="font-bold text-2xl">
          {props?.data?.title}-({props?.data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        <ResMenuList item={props?.data?.itemCards}/>
      </div>
    </div>
  );
};
export default RestaurantCategory;
