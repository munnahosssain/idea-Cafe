import React from "react";

const Cart = ({ cart, count }) => {
  let quantity = 0;
  let watchTime = 0;
  for (const time of cart) {
    watchTime = watchTime + time.readTime;
  }

  for (const time of count) {
    time.quantity = time.quantity || 1;
    quantity = quantity + time.quantity;
  }

  return (
    <div>
      <h1 className="bg-blue-100 p-6 font-bold text-2xl border-solid border-4 border-sky-500 rounded-md">
        Spent time on read: {watchTime} min
      </h1>
      <div className="text-start p-6 bg-base-200 mt-4">
        <h1 className="font-bold text-xl">Bookmarked Blogs : {quantity}</h1>
      </div>
    </div>
  );
};

export default Cart;
