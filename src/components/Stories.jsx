import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../components/StoriesStyle.css";

const Stories = (probs) => {
  return (
    <>
      <div className="stories-container custom-card">
        <img
          className="custom-img-fluid custom-rounded"
          src={probs.imagestory}
          alt="Story"
        />
        <div className="custom-card-body">
          <p className="custom-meta">
            7 hour(s) ago #DjerfMatilda, #FashionandApparel, #Aftonbladet
          </p>
          <p className="custom-source">
            Americas 🇺🇸 / The New York Times
          </p>
          <h5 className="custom-title">
            Matilda Djerf Apologizes Amid Claims of Workplace Toxicity
          </h5>
          <button className="btn-category custom-btn-primary custom-rounded-pill "> 
            Read More  <FaArrowRightLong className="ms-2"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Stories;
