import Banner from "./Banner";
import OurProgram from "./our-program/OurProgram";

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Banner />
      <OurProgram />
    </div>
  );
};

export default Home;
