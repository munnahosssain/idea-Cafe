import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const addReadingTime = blogs => {
    const newCart = [...cart, blogs];
    setCart(newCart);
  };

  const addBookMark = counts => {
    let newBookmark = [];
    const exist = bookmarks.find(bookmark => bookmark._id === counts._id);

    if (!exist) {
      counts.quantity > 1;
      newBookmark = [...bookmarks, counts];
    } else {
      exist.quantity = exist.quantity + 1;
      newBookmark = [...bookmarks, counts];
      toast(
        "'You Have Already Bookmarked This Blog'. You can't use browser alert. If the blog title gets added in the list after toast alert we will accept it. That is, You can bookmark a blog multiple times. No worries!"
      );
    }
    setBookmarks(newBookmark);
  };

  return (
    <div className="">
      <div className="lg:flex flex-row">
        <div>
          {blogs.map(blog => (
            <Blog
              key={blog._id}
              blog={blog}
              addReadingTime={addReadingTime}
              addBookMark={addBookMark}
            />
          ))}
        </div>
        <div className="basis-1/2 mt-4">
          <Cart cart={cart} count={bookmarks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
