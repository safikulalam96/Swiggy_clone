import { apiMenu } from "./constrain";
import { useState, useEffect } from "react";
const useApicall = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const menuData = await fetch(apiMenu + resId);
      const json = await menuData.json();
      setResMenu(json.data);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };
  return resMenu;
};
export default useApicall;
