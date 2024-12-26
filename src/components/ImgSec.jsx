import React from "react";
import img2 from "../assets/img/img2.jpg";
import "../components/ImgSecMainStyle.css";

const ImgSec = () => {
  return (
    <div className="imgSecMain col-lg-7">
      <div className="container-fluid imgSec">
        <img 
          className="imgsecdev img-fluid"
          src={img2}
          alt="img"
        />
        <div className="imgSecContent">
          <p className="text-1">
            1 hour ago #DefenseandMilitaryForces, #UnitedStatesPolitics,
            #MilitaryBasesandInstallations
          </p>
          <p className="text-2">
            Asia 🇯🇴 / The New York Times
          </p>
          <p className="text-3">
            Justice Dept. Charges 2 Men in Deadly Drone Attack on U.S. Soldiers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgSec;
