import React from "react";
import "../components/FeaturesStyle.css"

const Features = (props) => {
  return (
    <div className="container features-container">
      <div className="feature-item mt-4 p-3 shadow-sm rounded bg-white">
        {/* Image Section */}
        <img
          className="rounded-3 img-fluid feature-image"
          src={props.imgall}
          alt="Feature"
        />
        {/* Content Section */}
        <div className="feature-content mt-3">
          <p className="feature-time text-muted mb-1">{props.time}</p>
          <p className="feature-tags text-primary mb-2">{props.tags}</p>
          <h5 className="feature-title fw-bold mb-2">{props.title}</h5>
          <p className="feature-desc text-secondary">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
