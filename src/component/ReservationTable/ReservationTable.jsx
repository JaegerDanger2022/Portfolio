import { Divider, TextField } from "@mui/material";
import Buttons from "../Buttons/Buttons";
import { CustomTextField } from "../customTextField/CustomTextField";
import AmPMCustomization from "../DatePicker/AmPMCustomization";
import { useDispatch, useSelector } from "react-redux";
import { setAge, setName } from "../../manager/Slices/UserFormSlice";
import { useState } from "react";

function ReservationTable({
  valueName,
  valuePerson,
  valuePhone,
  valueDatePicker,
}) {
  const dispatch = useDispatch();

  const [nma, setNameHere] = useState("");

  const reserve = () => {
    // dispatch(setName(nma));
    dispatch(setAge(valuePhone));
    alert("Resercer ");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Flex */}
        <div
          style={{
            flex: ".1",
            display: "flex",
            // alignContent: "center",
            justifyContent: "center",
            // background: "pink",
          }}
          id="reserve"
        >
          <Divider sx={{ width: "2px", height: "15vh", background: "wheat" }} />
        </div>
        {/* Reservation Text Field Header */}
        <div
          style={{
            flex: ".2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // background: "red",
            color: "white",
            gap: "2em",
          }}
        >
          <div style={{ fontSize: "50px" }}>RESERVATIONS</div>
          <small>Book your table online now</small>
        </div>
        {/* Reservation Text Field */}
        <div
          style={{
            flex: ".7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5em",
            paddingTop: "2vh",
          }}
        >
          {/* <TextField
            onChange={(e) => {
              setNameHere(e.target.value);
            }}
          /> */}
          <CustomTextField
            value={valueName}
            helperText={"Name"}
            width={"40vw"}
          />
          <CustomTextField
            value={valuePhone}
            helperText={"Phone"}
            width={"40vw"}
          />
          <CustomTextField
            value={valuePerson}
            helperText={"Number of persons"}
            width={"40vw"}
          />
          <AmPMCustomization valueDatePicker={valueDatePicker} />
          <div
            style={{
              paddingTop: "6vh",
            }}
          >
            <Buttons
              onClick={() => {
                reserve();
              }}
              NameBtn={"Make Reservation"}
            />
          </div>
        </div>
        {/* End of Flex */}
      </div>
    </>
  );
}

export default ReservationTable;
