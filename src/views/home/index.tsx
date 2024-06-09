import React from "react";
import DashboardNavBar from "../../components/DashboardNavBar";
import DashboardTopMenu from "../../components/DashboardTopMenu";
import PageTitle from "../../components/PageTitle";
import Statistics from "../../components/Statistics";
import "./style.scss";

export default function HomePage() {
  return (
    <div className="dashboard-container">
      <div className="admin-left-side">
        <DashboardNavBar />
      </div>
      <div className="admin-right-side">
        <div className="content-body-side">
          <DashboardTopMenu />
          <div className="content-wrapper">
            <PageTitle
              breadCrumbItems={[
                { label: "Dashboards", path: "/dashboard-2" },
                { label: "Dashboard 2", path: "/dashboard-2", active: true },
              ]}
              title={"User"}
            />
            <Statistics />

            <PageTitle
              breadCrumbItems={[
                { label: "Dashboards", path: "/dashboard-2" },
                { label: "Dashboard 2", path: "/dashboard-2", active: true },
              ]}
              title={"Movie"}
            />

            <Statistics />

            <PageTitle
              breadCrumbItems={[
                { label: "Dashboards", path: "/dashboard-2" },
                { label: "Dashboard 2", path: "/dashboard-2", active: true },
              ]}
              title={"Movie"}
            />

            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}
