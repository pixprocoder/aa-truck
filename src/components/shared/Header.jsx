import { useState } from "react";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button, Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderPage = () => {
  const [selectedKey] = useState([]);

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width={100} src={logo} alt="logo" />

          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={selectedKey}
            style={{
              flex: 1,
              minWidth: 0,
              marginLeft: "10px",
              background: "transparent",
            }}
          >
            {navItems.map((item) => (
              <Menu.Item
                style={{ background: "transparent !important" }}
                key={item.key}
              >
                <Link to={item.href} type="primary">
                  {item.key}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <Button type="primary">Book Now</Button>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderPage;
