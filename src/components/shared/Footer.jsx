import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#b5afaf", padding: "20px 0" }}>
      <div className="min-width ">
        <Row className="">
          <Col xs={24} sm={12} md={8} lg={6}>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="footer-li">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-li">
                <Link to="/about">about</Link>
              </li>
              <li className="footer-li">
                <Link to="/contact">contact Us</Link>
              </li>
              <li className="footer-li">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="footer-li">
                <Link to="/">Read Blogs</Link>
              </li>
              <li className="footer-li">
                <Link to="/">Terms</Link>
              </li>
              <li className="footer-li">
                <Link to="/">Security</Link>
              </li>
              <li className="footer-li">
                <Link to="/">Support</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Follow Me</h3>
            <ul className="space-y-2 text-sm">
              <li className="footer-li">Connect Us on social</li>
              <ul className="flex gap-4">
                <li className="footer-li">
                  <Link to="https://www.facebook.com">
                    <FacebookOutlined />
                  </Link>
                </li>
                <li className="footer-li">
                  <Link to="https://www.instagram.com">
                    <InstagramOutlined />
                  </Link>
                </li>

                <li className="footer-li">
                  <Link to="https://www.linkedin.com/in/pixprocoder/">
                    <LinkedinOutlined />
                  </Link>
                </li>
              </ul>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Newsletter</h3>
            <ul className="space-y-2 text-sm">
              <li className="footer-li">Stay update with our latest</li>
              <li className="footer-li">
                <div className="flex w-full max-w-sm items-center space-x-2 text-blue-500">
                  <Input
                    className="text-blue-500"
                    type="email"
                    placeholder="Email"
                  />
                  <Button style={{ marginTop: "10px" }} type="primary">
                    Subscribe
                  </Button>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Copyright ©2024 All rights reserved by |{" "}
          <b className="text-blue-500">AA Truck</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
