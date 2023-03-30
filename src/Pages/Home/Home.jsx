import React, { useEffect, useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div>
      <h1>{blog.length}</h1>
    </div>
  );
};

export default Home;
