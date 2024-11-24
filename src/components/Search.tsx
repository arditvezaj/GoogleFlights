import React, { useState } from "react";
import {
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import DatePicker from "./DatePicker";
import { Search as SearchIcon } from "@mui/icons-material";
import apiRequest from "../axios";

const Search = () => {
  const [trip, setTrip] = useState("Round trip");
  const [tripClass, setTripClass] = useState("Economy");
  const [date, setDate] = useState(new Date());

  const [fromOptions, setFromOptions] = useState<any[]>([]);
  const [toOptions, setToOptions] = useState<any[]>([]);

  const handleTripChange = (event: SelectChangeEvent<string>) => {
    setTrip(event.target.value);
  };

  const handleTripClassChange = (event: SelectChangeEvent<string>) => {
    setTripClass(event.target.value);
  };

  const handleFromChange = async (event: any) => {
    try {
      const response = await apiRequest<any>(
        "flights/searchFlights",
        "GET",
        event.target.value
      );
      setFromOptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToChange = async (event: any) => {
    try {
      const response = await apiRequest<any>(
        "flights/searchFlights",
        "GET",
        event.target.value
      );
      setToOptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  return (
    <div
      className="flex flex-col gap-4 rounded-lg p-4"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)",
      }}
    >
      <div className="flex gap-4">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          size="small"
          variant="standard"
          value={trip}
          onChange={handleTripChange}
        >
          <MenuItem value="Round trip">Round trip</MenuItem>
          <MenuItem value="One-way">One-way</MenuItem>
          <MenuItem value="Multi-city">Multi-city</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          size="small"
          variant="standard"
          value={tripClass}
          onChange={handleTripClassChange}
        >
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Premium Economy">Premium Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="First">First</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-3">
        <div className="flex gap-2">
          <Autocomplete
            disablePortal
            options={fromOptions.map(
              (option: any) => option.presentation.title
            )}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where from?"
                onChange={handleFromChange}
              />
            )}
          />
          <Autocomplete
            disablePortal
            options={fromOptions.map(
              (option: any) => option.presentation.title
            )}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where to?"
                onChange={handleToChange}
              />
            )}
          />
        </div>
        <DatePicker value={date} onChange={handleDateChange} />
      </div>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        className="w-[120px] h-[40px] self-center"
        style={{ borderRadius: "100px", marginBottom: "-37px" }}
        // onClick={handleSubmit}
      >
        Explore
      </Button>
    </div>
  );
};

export default Search;
