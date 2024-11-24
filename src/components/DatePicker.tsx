import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function DatePicker({ value, onChange }: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]} sx={{ paddingTop: 0 }}>
        <DateRangePicker
          localeText={{ start: "Departure", end: "Return" }}
          // value={value}
          // onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  ); 
}
