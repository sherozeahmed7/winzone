import React from "react";
import img3 from "../assets/img/img3.jpg";
import "../components/LatestNewsStyle.css";

const LatestNews = (props) => {
  return (
    <div className="latestnews-container d-flex align-items-center">
      <div className="latestnews-image col-lg-3 ms-lg-3">
        <img className="img-fluid rounded-circle" src={props.imglatestNews} alt="Latest News" />
      </div>
      <div className="latestnews-text ms-4">
        <p className="news-time">{props.time}</p>
        <p className="news-description">{props.des}</p>
        <a href="#" className="news-tags">
          <p>{props.tags}</p>
        </a>
      </div>
    </div>
  );
};

export default LatestNews;
