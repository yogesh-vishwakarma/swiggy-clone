import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo";


export default function SearchFood() {
  const { id } = useParams();
  const [food, setfood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");


  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setRestaurantName(data?.data?.cards?.[0]?.card?.card?.text ?? "this restaurant"); 
      const groupedCard = data?.data?.cards.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR);

    const cardArray = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) =>"itemCards" in items?.card?.card || "categories" in items?.card?.card);

      // const cardArray = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items)=>"itemCards" in items?.card?.card|| "categories" in items?.card?.card );
      const FilterData = cardArray?.flatMap((items) => {
     const content = items?.card?.card;

      if (content?.itemCards) {
      return content.itemCards;
      }

      if (content?.categories) {
      return content?.categories?.flatMap((cat) => cat.itemCards);
      }

      return [];
      });
      const FinalData = FilterData?.filter((item) => item?.card?.info?.name).map((item) => item.card.info);

      const uniqueItems = Array.from(new Map(FinalData.map((item) => [item.id, item])).values());

      setRestData(uniqueItems);
    }

    fetchData();
  }, [id]);

  const filteredItems = RestData.filter((item) =>item.name?.toLowerCase().includes(food.toLowerCase()));

  if(food.length<=1)
    return(
    <>
    <div className="w-[50%] mx-auto mt-20">
      <input type="text" className="w-full pl-10 py-2 text-[20px] bg-gray-100 shadow-md rounded-2xl border border-gray-200" placeholder={`Search in ${restaurantName}`} value={food} onChange={(e) => setfood(e.target.value)}/>
      <p className="text-center text-gray-500 mt-10 text-xl font-semibold">No matching dishes found 🍽️</p>
    </div>
    </>
    )
  return (
    <>
    <div className="w-[50%] mx-auto mt-20">
      <input type="text" className="w-full pl-10 py-4 mb-8 text-[20px] shadow-md text-2xl bg-gray-200 rounded-2xl border" placeholder="Search here" value={food} onChange={(e) => setfood(e.target.value)}/>
      {
      filteredItems.length > 0 ? (filteredItems.map((item) => (<RestInfo key={item.id} restData={item} />))) : (<p className="text-center text-gray-500 mt-10 text-xl font-semibold">No matching dishes found 🍽️</p>)
      }
    </div>
    </>
  );
}