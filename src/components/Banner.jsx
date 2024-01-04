import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "500px",
  textAlign: "center",
};

const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      afterChange={onChange}
    >
      <div>
        <div style={contentStyle}>
          <img
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "centre center",
              backgroundSize: "cover",
            }}
            src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "centre center",
              backgroundSize: "cover",
            }}
            src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "centre center",
              backgroundSize: "cover",
            }}
            src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
