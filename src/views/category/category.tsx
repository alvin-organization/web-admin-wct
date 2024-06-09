import React from "react";
import DashboardNavBar from "../../components/DashboardNavBar";
import DashboardTopMenu from "../../components/DashboardTopMenu";
import { Row, Col, Button } from "reactstrap";
import classNames from "classnames";
import { customers } from "./data";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { CoreRoutes } from "../../router/route";
import "./category.scss";

const NameColumn = ({ row }: { row: any }) => {
  return (
    <div className="table-user">
      <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
      <Link to="#" className="text-body fw-semibold">
        {row.original.name}
      </Link>
    </div>
  );
};

const LastOrderColumn = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.last_order.date}{" "}
      <small className="text-muted">{row.original.last_order.time}</small>
    </>
  );
};

const StatusColumn = ({ row }: { row: any }) => {
  return (
    <React.Fragment>
      <span
        className={classNames("badge", {
          "badge-soft-success": row.original.status === "Active",
          "badge-soft-danger": row.original.status === "Blocked",
        })}
      >
        {row.original.status}
      </span>
    </React.Fragment>
  );
};

const ActionColumn = () => {
  return (
    <React.Fragment>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </React.Fragment>
  );
};

const columns = [
  {
    Header: "Customer",
    accessor: "name",
    sort: true,
    Cell: NameColumn,
    classes: "table-user",
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Balance",
    accessor: "balance",
    sort: true,
  },
  {
    Header: "Orders",
    accessor: "orders",
    sort: true,
  },
  {
    Header: "Last Order",
    accessor: "last_order",
    sort: true,
    Cell: LastOrderColumn,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: true,
    Cell: StatusColumn,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    Cell: ActionColumn,
  },
];

const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: customers.length,
  },
];

export default function CategoryPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-container">
        <div className="admin-left-side">
          <DashboardNavBar />
        </div>
        <div className="admin-right-side">
          <div className="content-body-side">
            <DashboardTopMenu />
            <div className="content-wrapper">
              <div className="margin-bottom-prefix"></div>
              <Row>
                <Col sm={4}>
                  <Button
                    className="btn btn-danger mb-2"
                    onClick={() => {
                      navigate(
                        `${CoreRoutes.CATEGORY}${CoreRoutes.ADD_EDIT_CATEGORY}`
                      );
                    }}
                  >
                    <i className="mdi mdi-plus-circle me-2"></i> Add Category
                  </Button>
                </Col>

                <Col sm={8}>
                  <div className="text-sm-end">
                    <Button className="btn btn-success mb-2 me-1">
                      <i className="mdi mdi-cog-outline"></i>
                    </Button>

                    <Button className="btn btn-light mb-2 me-1">Import</Button>

                    <Button className="btn btn-light mb-2">Export</Button>
                  </div>
                </Col>
              </Row>

              <Table
                columns={columns}
                data={customers}
                pageSize={10}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
                isSearchable={true}
                tableClass="table-striped dt-responsive nowrap w-100"
                searchBoxClass="my-2"
              />

              <div className="margin-bottom-prefix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
