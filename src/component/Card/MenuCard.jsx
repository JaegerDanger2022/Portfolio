import { Avatar, Card } from "@mui/material";

function MenuCard({ dishName, dishArea, src, amount }) {
  return (
    // <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
    <Card
      sx={{
        display: "flex",
        // alignItems: "center",
        width: "45%",
        height: "30vh",
        // gap: "2em",
        flexDirection: "row",
        borderRadius: "10px",
        background:
          " linear-gradient(90deg, rgba(116,94,56,1) 62%, rgba(80,61,28,1) 90%)",
        color: "wheat",
      }}
    >
      <div
        style={{
          flex: ".35",
          // background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar src={src} sx={{ width: "90%", height: "90%" }} />
      </div>
      <div
        style={{
          flex: ".65",
          // background: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: ".5em",
        }}
      >
        <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <div style={{ fontSize: "20px" }}>{dishName}</div>
          <div>......................</div>
          <small
            style={{ fontSize: "15px", color: "red" }}
          >{`$-${amount}`}</small>
        </div>
        <div style={{ textAlign: "center" }}>{dishArea}</div>
      </div>
    </Card>
    // </div>
  );
}

export default MenuCard;
