import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
export function Profile({}) {
  return <div className="sidebar-profile">
        <div className="profile-info">
          <img src="https://source.unsplash.com/1000x800/?profile" alt="my img" />
          <div>
            <h6>Evano</h6>
            <p>project Manager</p>
          </div>
        </div>
        <BsChevronCompactDown className="icon-1" />
      </div>;
}
  