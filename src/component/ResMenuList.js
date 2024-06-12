import { imageLink } from "../utils/constrain";
export default function ResMenuList(props) {
  return (
    <div>
      {props.item.map((e,index) => (
        <div key={index} className=" border-b-2 border-gray-400 p-4 my-4 h-52 text-left">
          <div>
            <span className="font-bold text-xl p-3"> {e.card?.info?.name}</span>
            <p className="px-3 font-bold text-green-700">
              Price: ₹
              {e.card.info.price / 100 || e.card?.info?.defaultPrice / 100}
            </p>
          </div>
          <div className="flex px-3 relative h-1/2">
            <span className="text-sm opacity-70 mt-5 w-9/12">
              {e.card?.info?.description}
            </span>
            <img
              src={imageLink + e.card?.info?.imageId}
              className="h-32 rounded-lg absolute right-0 bottom-0 w-2/12"
              alt="Menu_image"
            ></img>
            <button className="w-24 h-9 font-bold rounded-lg bg-white text-green-600 right-5 -bottom-3 absolute">ADD </button>
          </div>
        </div>
      ))}
    </div>
  );
}
