import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CoreRoutes, Routes } from "../../router/route";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import "./dashboard-nav-bar.scss";

export default function DashboardNavBar() {
  return (
    <div className="content-side-menu">
      <div className="title-page">
        <MdAdminPanelSettings />
        <span>Alvin</span>
        <span className="dot-point">.</span>
      </div>
      <div className="underline-highlight"></div>
      <nav className="left-menu-admin">
        <ul>
          <li>
            <NavLink to={CoreRoutes.DASHBOARD}>
              <div className="text-menu">
                <AiFillDashboard /> <span>Dashboard</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="underline-highlight"></div>
          <div className="title-interface">
            <span>Interface</span>
          </div>
          <li>
            <NavLink to={`${CoreRoutes.CATEGORY}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Category</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${CoreRoutes.MOVIE}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Movie</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${Routes.EXPERIENCE_DASHBOARD}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Experience</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${Routes.DASHBOARD}/${Routes.SERVICE_DASHBOARD}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Services</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${Routes.DASHBOARD}/${Routes.WORK_DASHBOARD}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Work</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${Routes.DASHBOARD}/${Routes.CLIENT_DASHBOARD}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Client</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
          <li>
            <NavLink to={`${Routes.DASHBOARD}/${Routes.CONTACT_DASHBOARD}`}>
              <div className="text-menu">
                <AiFillSetting /> <span>User Contact</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="bottom-padd"></div>
          <div className="underline-highlight"></div>
          <div className="title-interface">
            <span>Add On</span>
          </div>
          <li>
            <NavLink to={Routes.ABOUT}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Components</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="bottom-padd"></div>
          <li>
            <NavLink to={Routes.ABOUT}>
              <div className="text-menu">
                <AiFillSetting /> <span>Add Components</span>
              </div>
              <div className="pointer-right">
                <IoIosArrowForward />
              </div>
            </NavLink>
          </li>
          <div className="under-padding"></div>
        </ul>
      </nav>
    </div>
  );
}
