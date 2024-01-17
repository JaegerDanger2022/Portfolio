import React from "react";
import Footer from "../component/Footer/Footer";
import ScreensHead from "../component/screensHeader/ScreensHead";
import { Card } from "@mui/material";
import { CustomTextField } from "../component/customTextField/CustomTextField";
import Buttons from "../component/Buttons/Buttons";
import ContactMap from "../component/Contact&Map/Contact&Map";

function Contact() {
  return (
    <>
      <div className="bodyContact">
        {/* GRIDING SYSTEM */}
        <div className="gridContainer">
          {/* GRIDING COMPONENTS */}

          {/* Contain the page header */}
          <div
            className="firstGridContainer"
            style={{
              display: "flex",
            }}
          >
            <ScreensHead
              Home={"HOME"}
              Menu={"MENU"}
              About={"ABOUT"}
              Contact={"CONTACT"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"MAKE RESERVATION"}
            />
          </div>
          {/* End of page header */}
          <div
            className="secondGridContainer"
            style={{
              color: "wheat",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "8em" }}>Contact</div>
            <small style={{ fontSize: "1.5em" }}>
              Eggstraordinary flavors for any appetite
            </small>
          </div>
          <div
            className="thirdGridContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Flex */}
            <div
              style={{
                flex: ".5",
                // background: "peru",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  flex: ".5",
                  paddingLeft: "50px",
                  paddingTop: "60px",
                  color: "white",
                }}
              >
                <h1>Drop Us A Line</h1>
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. Nam, incidunt!{" "}
                </div>
              </div>
              <div
                style={{
                  flex: ".5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  style={{
                    width: "80%",
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4em",
                    // gap: "1em",
                    paddingTop: "3vh",
                    // padding: "10%",
                    borderRadius: "10px",
                    background: "rgb(85, 81, 81)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                      //   width: "30%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CustomTextField helperText={"Name"} width={"90%"} />
                    <CustomTextField helperText={"Name"} width={"90%"} />
                    <CustomTextField helperText={"Name"} width={"90%"} />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Buttons NameBtn={"SEND"} width={"30%"} />
                  </div>
                </Card>
              </div>
            </div>
            <div
              style={{
                flex: ".5",
                // background: "yellow",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ContactMap />
            </div>
            {/* End Of Flex */}
          </div>
          <div className="fourthGridContainer">
            <Footer />
          </div>
          {/* END OF GRIDING COMPONENTS */}
        </div>
        {/* END OF GRIDING SYSTEM */}
      </div>
    </>
  );
}

export default Contact;
