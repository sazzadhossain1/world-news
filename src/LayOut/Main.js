import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Sharead/Header/Header";
import LeftSideNav from "../Pages/Sharead/Header/LeftSideNav/LeftSideNav";
import Footer from "../Pages/Sharead/Header/LeftSideNav/RightSideNav/Footer/Footer";
import RightSideNav from "../Pages/Sharead/Header/LeftSideNav/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
