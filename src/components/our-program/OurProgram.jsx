import { Card, Col, Row } from "antd";
import { programs } from "../../constants";

const OurProgram = () => {
  return (
    <div>
      <h1 style={{ fontSize: "50px", margin: "20px 0" }}>Meet Our Program</h1>

      <Row gutter={[16, 16]}>
        {programs.map((p) => (
          <Col key={p.id} span={8}>
            <Card title={p.id} bordered={true}>
              {p.title}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurProgram;
