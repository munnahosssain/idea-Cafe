import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const addReadingTime = blogs => {
    const newCart = [...cart, blogs];
    setCart(newCart);
  };

  return (
    <div className="lg:flex flex-row">
      <div className="basis-2/2 grow lg:h-14">
        {blogs.map(blog => (
          <Blog key={blog._id} blog={blog} addReadingTime={addReadingTime} />
        ))}
      </div>
      <div className="basis-1/2">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Home;
