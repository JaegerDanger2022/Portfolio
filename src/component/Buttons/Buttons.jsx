import Fab from "@mui/material/Fab";

function Buttons({ NameBtn, width, onClick }) {
  return (
    <>
      <Fab
        variant="extended"
        sx={{ height: "8vh", width: `${width}` }}
        size="large"
        onClick={onClick}
        style={{
          background:
            " linear-gradient(90deg, rgba(116,94,56,1) 62%, rgba(80,61,28,1) 90%)",
          color: "wheat",
        }}
      >
        {NameBtn}
      </Fab>
    </>
  );
}

export default Buttons;
