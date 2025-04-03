import React from "react";
import Nav from "../components/Nav";
import Categories from "./categories";

const Home = () => {
  return (
    <div className="w-full min-h-[100vh] bg-slate-200">
      <Nav />
      <div className="flex w-[100%] flex-wrap gap-6 items-center justify-center">
        {Categories.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex items-center gap-6 text-2xl rounded-lg shadow-xs font-semibold text-gray-500 flex-col justify-center hover:bg-green-200 cursor-pointer transition-all duration-700">
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
