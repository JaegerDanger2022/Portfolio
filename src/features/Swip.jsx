import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images
import image1 from "../assets/side-view-sour-pilaf-lamb-stew-with-fried-onion-dried-fruits-chestnuts-cake-plate.jpg";
import image2 from "../assets/top-view-fried-meat-with-vegetables-pan-board.jpg";
import image3 from "../assets/spicy-fried-stir-catfish-white-plate-thai-food.jpg";

// BTN
import Buttons from "../component/Buttons/Buttons";

const Swipper = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [image1, image2, image3];

  return (
    <div>
      <div
        style={{
          position: "absolute",
          color: "white",
          zIndex: "30",
          textAlign: "center",
          paddingLeft: "26%",
          paddingTop: "40vh",
          fontSize: "80px",
        }}
      >
        <h3> Flavors for all!</h3>
        <Buttons NameBtn={"VIEW MENU"} />
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        customTransition="all .10s"
        transitionDuration={7000}
        removeArrowOnDeviceType={["desktop", "mobile"]}
        autoPlay={true}
        pauseOnHover={false}
      >
        {images?.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              style={{
                width: "100%",
                height: "100vh",
                position: "relative",
              }}
            />
          </div>
        ))}

        {/* <div className="items">Item 4</div> */}
      </Carousel>
    </div>
  );
};
export default Swipper;
