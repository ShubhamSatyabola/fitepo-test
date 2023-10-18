import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

export function Cards({}) {
  return <div className="main-cards">
        <div className="card">
          <BsFillArchiveFill className="card_icon" />
          <div className="card-content">
            <h6>PRODUCTS</h6>
            <h1>$300k</h1>
            <p>
              <span className="increase">+ 30% </span>this month
            </p>
          </div>
        </div>
        <div className="card">
          <BsFillArchiveFill className="card_icon" />
          <div className="card-content">
            <h6>PRODUCTS</h6>
            <h1>$300k</h1>
            <p>
              <span className="decrease">+ 30% </span>this month
            </p>
          </div>
        </div>
        <div className="card">
          <BsFillArchiveFill className="card_icon" />
          <div className="card-content">
            <h6>PRODUCTS</h6>
            <h1>$300k</h1>
            <p>
              <span className="decrease">+ 30% </span>this month
            </p>
          </div>
        </div>
        <div className="card">
          <BsFillArchiveFill className="card_icon" />
          <div className="card-content">
            <h6>PRODUCTS</h6>
            <h1>$300k</h1>
            <p>
              <span className="increase">+ 30% </span>this month
            </p>
          </div>
        </div>
      </div>;
}
  