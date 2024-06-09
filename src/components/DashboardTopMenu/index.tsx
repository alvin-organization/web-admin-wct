import React from "react";
import { Row, Col, Button } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./dashboard-top-menu.scss";
import { CoreRoutes } from "../../router/route";

export default function DashboardTopMenu() {
  const navigate = useNavigate();
  return (
    <div className="top-nav-bar">
      <Row className="flex-item">
        <Col xl="6" lg="6" md="6">
          <div className="form-input-search">
            <form>
              <input type="text" placeholder="Search for..." required />
              <Button>
                <AiOutlineSearch />
              </Button>
            </form>
          </div>
        </Col>
        <Col xl="6" lg="6" md="6">
          <div className="tooltip-utils">
            <div className="icon-notification">
              <IoIosNotifications />
              <MdEmail />
            </div>
            <div className="user-email">
              <FaUserCircle />
              <>
                <span>Alvin@gmail.com</span>
              </>
            </div>
            <div
              className="btn-logout"
              onClick={() => {
                navigate(CoreRoutes.AUTH);
              }}
            >
              <span>Logout</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
