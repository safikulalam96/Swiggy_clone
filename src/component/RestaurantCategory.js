import ResMenuList from "./ResMenuList";

const RestaurantCategory = ({ data, isExpanded, onClick }) => {
  return (
    <div className="w-6/12 m-auto my-0 p-3 shadow-lg">
      <div className="justify-between flex cursor-pointer" onClick={onClick}>
        <span className="font-bold text-2xl">
          {data?.title} - ({data?.itemCards.length})
        </span>
        <span>{isExpanded ? "⬆️" : "⬇️"}</span>
      </div>
      {isExpanded && (
        <div>
          <ResMenuList item={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
