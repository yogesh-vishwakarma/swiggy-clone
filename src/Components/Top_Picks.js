import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function TopPickCard({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);

  const data = item?.dish?.info;

  const element = items.find((i) => i.id === data.id);
  const count = element ? element.quantity : 0;

  function handleAdd() {
    dispatch(addItems(data));
  }

  function handleInc() {
    dispatch(IncrementItems(data));
  }

  function handleDec() {
    dispatch(DecrementItems(data));
  }

  const image =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + item.creativeId;

  const price =
    "₹" +
    ("defaultPrice" in data
      ? data.defaultPrice / 100
      : data.price / 100);

  return (
    <div className="w-48 relative">
      {/* Image */}
      <img
        src={image}
        alt={data.name}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Gradient (optional but looks like Swiggy) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>

      {/* Price */}
      <p className="absolute bottom-12 left-3 text-white font-bold">
        {price}
      </p>

      {/* ADD / Counter */}
      {count === 0 ? (
        <button
          onClick={handleAdd}
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-4 py-1 rounded-lg shadow"
        >
          ADD
        </button>
      ) : (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-3 py-1 rounded-lg shadow text-green-600">
          <button onClick={handleDec}>-</button>
          <span>{count}</span>
          <button onClick={handleInc}>+</button>
        </div>
      )}
    </div>
  );
}