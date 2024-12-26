import React from "react";
import "../components/StoryPostStyle.css"

const StoryPost = () => {
  return (
    <>
      <div className="container d-lg-flex justify-content-between align-items-center story-post">
        {/* Title Section */}
        <div className="pb-3 pb-lg-0">
          <h1 className="fw-bold text-primary">New Stories Posts</h1>
        </div>

        {/* Buttons Section */}
        <div className="d-flex flex-wrap justify-content-lg-end">
          <button
            type="button"
            className="btn-category active-category"
          >
            All
          </button>
          <button type="button" className="btn-category">
            Sports
          </button>
          <button type="button" className="btn-category">
            Technology
          </button>
          <button type="button" className="btn-category">
            Politics
          </button>
          <button type="button" className="btn-category">
            Business
          </button>
          <button type="button" className="btn-category">
            Education
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryPost;
