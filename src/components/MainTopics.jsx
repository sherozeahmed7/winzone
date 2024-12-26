import React from "react";
import "../components/MainTopicsStyle.css";

const MainTopics = (probs) => {
  return (
    <>
      <div className="container main-topics-card position-relative me-2">
        <div className="main-topics-img-container">
          <img
            className="main-topics-img rounded-3 img-fluid"
            src={probs.imgmaintop}
            alt="Main Topic"
          />
          <div className="main-topics-tag position-absolute top-0">
            <h6 className="bg-primary text-white mt-2 pe-4 ps-2 rounded-pill shadow">
              {probs.tagstopics}
            </h6>
          </div>
        </div>

        <div className="main-topics-content mt-3">
          <p className="main-topics-initial text-muted">{probs.initial}</p>
          <h4 className="main-topics-header fw-bold">{probs.headtopics}</h4>
        </div>
      </div>
    </>
  );
};

export default MainTopics;
