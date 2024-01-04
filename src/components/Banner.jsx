import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <img
          style={{
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "centre center",
            backgroundSize: "cover",
          }}
          src={banner1}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
