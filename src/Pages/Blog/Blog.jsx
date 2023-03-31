import React from "react";
import logo from "../images/LOGO.png";

const Blog = props => {
  const { title, banner, picture, authorName, time, ReadTime } = props.blog;
  const { tagOne, tagTwo, tagThree } = props.blog?.tagLine[0];
  return (
    <div className="w-full shadow-xl p-4">
      <figure>
        <img src={banner} alt="Shoes" />
      </figure>
      <div className="card-actions justify-between py-6">
        <div className="flex ">
          <img style={{ height: "40px" }} src={logo} alt="" />
          <div className="ml-4 text-start">
            <h1 className="font-bold">{authorName}</h1>
            <p>{time}</p>
          </div>
        </div>
        <div className="">{ReadTime} min read</div>
      </div>
      <h2 className="text-start text-4xl font-bold">{title}</h2>
      <div className="flex my-4">
        <p>{tagOne} </p>
        <p className="px-2">{tagTwo}</p>
        <p>{tagThree}</p>
      </div>
      <button className="font-semibold underline text-start flex">
        Mark as red
      </button>
    </div>
  );
};

export default Blog;
