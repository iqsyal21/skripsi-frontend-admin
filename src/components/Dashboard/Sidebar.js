import React from "react";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import FullHeight from "react-full-height";

const Sidebar = () => {
  const history = useHistory();

  return (
    <div>
      <FullHeight style={{ overflow: "hidden" }}>
        <Row>
          <Col>
            <div className="container-sidebar-item">
              <div
                className={
                  window.location.pathname === "/dashboard" ||
                  window.location.pathname === "/dashboard/agenda"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/agenda")}
                >
                  Agenda
                </ListGroup.Item>
              </div>
              <div
                className={
                  window.location.pathname === "/dashboard/artikel"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/artikel")}
                >
                  Artikel
                </ListGroup.Item>
              </div>
              <div
                className={
                  window.location.pathname === "/dashboard/stok"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/stok")}
                >
                  Stok Vaksin
                </ListGroup.Item>
              </div>
              <div
                className={
                  window.location.pathname === "/dashboard/jadwal"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/jadwal")}
                >
                  Jadwal Vaksinasi
                </ListGroup.Item>
              </div>
              <div
                className={
                  window.location.pathname === "/dashboard/warga"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/warga")}
                >
                  Data Warga
                </ListGroup.Item>
              </div>
              <div
                className={
                  window.location.pathname === "/dashboard/pendaftaran"
                    ? "active-tab"
                    : ""
                }
              >
                <ListGroup.Item
                  action
                  onClick={() => history.push("/dashboard/pendaftaran")}
                >
                  Pendaftaran Vaksinasi
                </ListGroup.Item>
              </div>
            </div>
          </Col>
        </Row>
      </FullHeight>
    </div>
  );
};

export default Sidebar;
