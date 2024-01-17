import { Link, useNavigate } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import Lenis from "@studio-freight/lenis";

function ScreensHead({
  Home,
  Menu,
  About,
  Contact,
  Tasty,
  Haven,
  MakeReservation,
}) {
  const navigate = useNavigate();

  const handleTastyHavens = () => {
    navigate("/");
  };
  const reservation = () => {
    scrollpage(reserve);
  };

  const aboutUs = () => {
    scrollpage(about);
  };

  const mainManu = () => {
    scrollpage(menu);
  };

  // Settings for lenis smooth scroll

  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const scrollpage = (component) => {
    lenis.scrollTo(component, {
      duration: 6,
      immediate: false,
      direction: "vertical",
      easing: (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 4,
      infinite: false,
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {/* Listed tabs for navigation names*/}
        <div
          style={{
            flex: ".35",
            // background: "peru",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // gap: "1em",
          }}
        >
          <ul
            className="list"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              fontSize: "15px",
              color: "wheat",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
              {" "}
              <li>{Home}</li>
            </Link>

            <Link
              to="/OurMenu"
              style={{ textDecoration: "none", color: "wheat" }}
            >
              <li>{Menu}</li>
            </Link>
            <li onClick={aboutUs}>{About}</li>

            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "wheat" }}
            >
              {" "}
              <li>{Contact}</li>{" "}
            </Link>
          </ul>
        </div>
        {/* End Of Listed tabs for navigation names*/}
        <div
          style={{
            flex: ".3",
            // background: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              fontSize: "30px",
              fontWeight: "500",
              color: "rgb(116,94,56)",
              font: "bold",
            }}
            onClick={handleTastyHavens}
          >
            {Tasty} <br /> {Haven}
          </h4>
        </div>
        <div
          style={{
            flex: ".35",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Buttons
            NameBtn={MakeReservation}
            width={"20vw"}
            onClick={reservation}
          />
        </div>
      </div>
    </>
  );
}

export default ScreensHead;
