import React from "react";

const Headertext = ({ content }) => {
  return (
    <div className="trending-text-wrapper mb-5">
      <h6>{content ? content.category : "AMEY Trending Collections"}</h6>
      <h1>{content ? content.header : "Trending Products"}</h1>
    </div>
  );
};

export default Headertext;
