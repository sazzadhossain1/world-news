import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../../../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="my-3">Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-4 p-1">
            <FaFacebookF className="mx-2"></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-4 p-1">
            <FaTwitter className="mx-2"></FaTwitter>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-4 p-1">
            <FaWhatsapp className="mx-2"></FaWhatsapp>Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-4 p-1">
            <FaTwitch className="mx-2"></FaTwitch>
            Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-4 p-1">
            <FaYoutube className="mx-2"></FaYoutube> Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
