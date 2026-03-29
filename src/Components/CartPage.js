import { Link } from "react-router";
import { IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch } from "react-redux";

export default function CartPage({ data }) {

  const dispatch = useDispatch();

  // Empty cart
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="empty cart"
          className="w-72 mb-6"
        />

        <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">
          Add some delicious food to your cart
        </p>

        <Link to="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
            Browse Restaurants
          </button>
        </Link>

      </div>
    );
  }

  // Total price
  const total = data.reduce((acc, item) => {
    const price = (item.defaultPrice ?? item.price) / 100;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = data.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-6">

          {data.map((item) => {

            const price = (item.defaultPrice ?? item.price) / 100;

            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center hover:shadow-lg transition"
              >

                <div>

                  <h3 className="text-lg font-bold">{item.name}</h3>

                  <p className="text-gray-600">
                    Price: ₹{price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-3">

                    <button
                      onClick={() => dispatch(DecrementItems(item))}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(IncrementItems(item))}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                  <p className="mt-2 font-semibold">
                    Item Total: ₹{price * item.quantity}
                  </p>

                </div>

                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                  className="w-28 h-28 rounded-lg object-cover"
                />

              </div>
            );
          })}

        </div>

        {/* Bill Section */}

        <div className="lg:w-1/3">

          <div className="bg-white p-6 rounded-xl shadow-md sticky top-10">

            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Bill Details
            </h2>

            <div className="flex justify-between mb-2">
              <span>Items ({totalItems})</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>₹20</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>GST</span>
              <span>₹{(total * 0.05).toFixed(0)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold mt-4 text-green-600">
              <span>To Pay</span>
              <span>₹{(total + 20 + total * 0.05).toFixed(0)}</span>
            </div>

            <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
              Proceed to Payment
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}