import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  // console.log(blogs);

  return (
    <div className="lg:flex flex-row">
      <div className="basis-2/2 grow lg:h-14">
        {blogs.map(blog => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="basis-1/2">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
