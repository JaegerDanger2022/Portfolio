import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from "@mui/material";

function Footer() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
      <div
        style={{
          flex: ".35",
          // background: "peru",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "wheat" }}>
          Tasty's
          <br />
          Haven
        </h1>
      </div>
      <div
        style={{
          flex: ".2",
          // background: "peru",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
            color: "wheat",
          }}
        >
          <li>Home</li>
          <li>Men</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        style={{
          flex: ".2",
          // background: "peru",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div
        style={{
          flex: ".05",
          // background: "peru",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Divider style={{ background: "whitesmoke" }} />
      </div>
      <div
        style={{
          flex: ".2",
          // background: "peru",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "20px", color: "wheat" }}>
          Copyright © 2024 Tasty's Haven Restaurant | powered by Tasty's Haven
          Restaurant
        </div>
      </div>
    </div>
  );
}

export default Footer;
