import React, { useState } from "react";
import "./sidebar.css";
import { FaChevronRight, FaCarAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { FaSuperpowers } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ closeSidebar, setCloseSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`${closeSidebar ? "sidebar close" : "sidebar"}`}>
      <div
        className="sidebar-icon-div"
        onClick={() => setCloseSidebar(!closeSidebar)}
      >
        <FaChevronRight className="sidebar-icon" />
      </div>
      <ul>
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleItemClick(0)}
        >
          <MdDashboard />
          <span>لوحة التحكم</span>
        </li>
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleItemClick(1)}
        >
          <FaChalkboardTeacher />
          <span> الموظفين</span>
        </li>
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleItemClick(2)}
        >
          <IoMdMove />
          <span> الحركة</span>
        </li>
        <li
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleItemClick(3)}
        >
          <FaCarAlt />
          <span>المركبات</span>
        </li>
        <li
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => handleItemClick(4)}
        >
          <SiContributorcovenant />
          <span> العهد</span>
        </li>
        <li
          className={activeIndex === 5 ? "active" : ""}
          onClick={() => handleItemClick(5)}
        >
          <GrHostMaintenance />
          <span> الصيانة </span>
        </li>
        <li
          className={activeIndex === 6 ? "active" : ""}
          onClick={() => handleItemClick(6)}
        >
          <FaSuperpowers />
          <span> الصلاحيات</span>
        </li>
        <li
          className={activeIndex === 7 ? "active" : ""}
          onClick={() => handleItemClick(7)}
        >
          <CgProfile />
          <span> الملف الشخصي</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
