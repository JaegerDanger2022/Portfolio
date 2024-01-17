import React, { useState } from "react";
import Footer from "../component/Footer/Footer";
import ScreensHead from "../component/screensHeader/ScreensHead";
import { Card } from "@mui/material";
import { CustomTextField } from "../component/customTextField/CustomTextField";
import Buttons from "../component/Buttons/Buttons";
import ContactMap from "../component/Contact&Map/Contact&Map";

// Imported ID's
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../fireBase/FireBase";

function Contact() {
  // Names For Values Using useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleDataBaseContact = async () => {
    try {
      // alert("Clks");
      if (name.length !== 0 && email.length !== 0 && text.length !== 0) {
        const uuid = uuidv4();
        // alert(uuid);
        await setDoc(doc(db, `USERS_DataBase`, uuid), {
          contact_UserName: name,
          contact_UserEmail: email,
          contact_UserText: text,
          accountId: uuid,
        });
        setName("");
        setEmail("");
        setText("");
      } else {
        alert("All field require ");
      }
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

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
                    <CustomTextField
                      value={name}
                      onchange={(event) => {
                        setName(event.target.value);
                      }}
                      helperText={"Name"}
                      width={"90%"}
                    />
                    <CustomTextField
                      value={email}
                      helperText={"Email"}
                      width={"90%"}
                      onchange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    <CustomTextField
                      value={text}
                      helperText={"Text"}
                      width={"90%"}
                      onchange={(event) => {
                        setText(event.target.value);
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Buttons
                      NameBtn={"SEND"}
                      width={"30%"}
                      onClick={() => {
                        handleDataBaseContact();
                        // console.log(handleDataBaseContact);
                        // alert("hello");
                      }}
                    />
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
