import React from "react";
import "../components/CardUpdatestyle.css";
import { FaArrowRightLong } from "react-icons/fa6";

const CardUpdate = () => {
  return (
    <>
      <div className=" container position-relative  bg-primary cardSub ">
        <div className=" container-fluid d-flex  position-absolute bg-info cardimg  "></div>
        <div className="textsub text-light">
          <h2>Subscribe For Updates</h2>
          <p>
            {" "}
            This year has been a whirlwind of drama and controversy in the
            world.{" "}
          </p>
          <div className="d-flex ">
            <div className="col-8">
              <input
                className=" form-control bg-primary border border-0 inputtxt"
                type="text"
                placeholder="Enter your Email"
              />
            </div>

            <button className="btn btnsubcard rounded-pill fw-bold">
              subscribe Now &nbsp; <FaArrowRightLong />
            </button>
          </div>
          <hr className="hrtag" />
        </div>
      </div>
    </>
  );
};

export default CardUpdate;
