import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [menu, setmenu] = useState();
  // const {name,cuisines,costForTwoMessage}=menu?.data.cards[2]?.card?.card?.info;
  //   const {itemlist}=menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const { resId } = useParams();

  useEffect(() => {
    fetchingMenu();
  }, []);

  const fetchingMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" +
        resId +
        "&catalog_qa=undefined"
    );
    const ans = await data.json();
    setmenu(ans);
  };

  return (
    <div className="my-4">
      <section className="container text-center my-3">
        <h2>{menu?.data.cards[2]?.card?.card?.info.name}</h2>
        <h2>{menu?.data.cards[2]?.card?.card?.info.cuisines.join(" ")}</h2>
        <h2>{menu?.data.cards[2]?.card?.card?.info.costForTwoMessage}</h2>
      </section>

      {menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (item) => {
          // suggestion list
          {
            console.log("done");
          }
          return item.card?.card?.itemCards?.map((e) => {
            return (
              <div
                className="border border-success p-2 mb-2"
                key={e.card?.info?.id}
              >
                <li>
                  {e.card?.info?.name} : Rs {e.card?.info?.price / 100}
                </li>
              </div>
            );
          });
        }
      )}
    </div>
  );
};
export default Menu;