import { Divider } from "@mui/material";
import React from "react";
import WorldMaps from "../../features/Map/WorldMaps";

const ContactMap = () => {
  return (
    <>
      {/* Table */}
      <div
        style={{
          flex: ".5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            gap: ".8em",
            paddingTop: "3vh",
          }}
        >
          {/* CONTACT */}
          <h2 style={{ float: "left", color: "white" }}>Contact</h2>
          <Divider sx={{ width: "100%", background: "wheat" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2em",
            }}
          >
            <h4 style={{ color: "wheat" }}>Phone</h4>
            <div style={{ color: "white" }}>(555) 555-1234</div>
          </div>
          <Divider sx={{ width: "100%", background: "wheat" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2em",
            }}
          >
            <h4 style={{ color: "wheat" }}>Address</h4>
            <div style={{ color: "white" }}>Nigeria</div>
          </div>

          {/* OPENING HOURS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: ".8em",
              paddingTop: "8vh",
            }}
          >
            <h2 style={{ float: "left", color: "white" }}>OPENING HOURS</h2>
            <Divider sx={{ width: "100%", background: "wheat" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2em",
              }}
            >
              <h4 style={{ color: "wheat" }}>Monday-Friday</h4>
              <div style={{ color: "white" }}>9:00 AM - 10:00 PM</div>
            </div>
            <Divider sx={{ width: "100%", background: "wheat" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2em",
              }}
            >
              <h4 style={{ color: "wheat" }}>Saturday</h4>
              <div style={{ color: "white" }}>9:00 AM - 18:00 PM</div>
            </div>
            <Divider sx={{ width: "100%", background: "wheat" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2em",
              }}
            >
              <h4 style={{ color: "pink" }}>Sunday</h4>
              <div style={{ color: "pink" }}>Closed</div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div
        style={{
          flex: ".5",
          // background: "white",
          overflow: "hidden",
        }}
      >
        <WorldMaps />
      </div>
    </>
  );
};

export default ContactMap;
