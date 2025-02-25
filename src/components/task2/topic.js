import React from "react";
import DetailPost from "./detailpost";

function Topic() {
  return (
    <div className="container bg-stone-700 text-white mx-auto ">
        <h2 className=" mx-2 my-2">TOP PICKS FOR YOU</h2>
        <DetailPost/>
    </div>      
  );
}

export default Topic;