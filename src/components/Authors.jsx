import React from "react";
import "../components/AuthorsStyle.css";

const Authors = (probs) => {
  return (
    <>
      <div className=" container d-flex align-items-start mt-5 pt-5">
        {/* Author's Logo */}
        <div className="authors-logo px-3 text-center rounded-circle d-flex align-items-center justify-content-center text-light">
          <h5>{probs.logoName}</h5>
        </div>

        {/* Author's Info */}
        <div className="author-details ms-4">
          <h4 className="author-heading">{probs.authorheading}</h4>
          <div className="author-tags mt-2">
            <span className="tag">{probs.authortag1}</span>
            <span className="tag">{probs.authortag2}</span>
            <span className="tag">{probs.authortag3}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
