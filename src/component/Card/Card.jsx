import { Avatar, Card } from "@mui/material";

function Cards({ src, dishName }) {
  return (
    <>
      <Card
        style={{
          width: "23%",
          height: "65%",
          display: "flex",
          flexDirection: "column",
          border: "wheat solid 5px",
          borderRadius: "10px",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(76,62,38,1) 62%, rgba(80,61,28,1) 90%)",
        }}
      >
        <div
          style={{
            flex: ".7",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={src} sx={{ width: "60%", height: "26vh" }} />
        </div>
        <div
          style={{
            flex: ".3",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6 style={{ fontSize: "20px", color: "white" }}>{dishName}</h6>
        </div>
      </Card>
    </>
  );
}

export default Cards;
