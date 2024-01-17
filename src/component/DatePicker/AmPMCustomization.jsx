import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en-gb";
import Stack from "@mui/material/Stack";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";

// const locales = ["en", "en-gb", "de"];

export default function AmPMCustomization({ valueDatePicker, change }) {
  const [locale, setLocale] = React.useState("en");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Stack spacing={3} width={"40vw"}>
        {/* <ToggleButtonGroup
          value={locale}
          exclusive
          fullWidth
          onChange={(event, newLocale) => {
            if (newLocale != null) {
              setLocale(newLocale);
            }
          }}
        >
          {locales.map((localeItem) => (
            <ToggleButton key={localeItem} value={localeItem}>
              {localeItem}
            </ToggleButton>
          ))}
        </ToggleButtonGroup> */}
        <DateTimePicker
          value={valueDatePicker}
          label="Uncontrolled picker"
          defaultValue={""}
          onChange={change}
        />
      </Stack>
    </LocalizationProvider>
  );
}
