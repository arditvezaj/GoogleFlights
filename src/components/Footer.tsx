import {
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "./atoms/Link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 p-7 text-gray-600">
      <Divider className="w-full" />
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-sm text-center w-[650px]">
          Current language and currency options applied: English (United
          Kingdom) - Unknown Region - USD Displayed currencies may differ from
          the currencies used to purchase flights.{" "}
          <Link href="#">Learn more</Link>
        </p>
        <div className="flex gap-7">
          <Link href="#">About</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Join user studies</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Help Centre</Link>
        </div>
      </div>
      <Divider className="w-full" />
      <div className="flex gap-7">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="text-blue-500 font-semibold">International sites</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-7">
            <Link href="#">Google Flights - United States (en-US)</Link>
            <Link href="#">Google Voos - Brasil (pt-BR)</Link>
            <Link href="#">Google Flights - Canada (en)</Link>
            <Link href="#">Google Flights - United Kingdom (en-GB)</Link>
            <Link href="#">Google Flights - India (en)</Link>
            <Link href="#">Google Flights - France (fr)</Link>
            <Link href="#">Google Flüge - Deutschland (de)</Link>
            <Link href="#">Google Vuelos - España (es)</Link>
            <Link href="#">Google Flights - Australia (en)</Link>
            <Link href="#">Google Flights - México (es)</Link>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <p className="text-blue-500 font-semibold">Explore flights</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-7">
            <Link href="#">Popular departures from Unknown Region</Link>
            <Link href="#">Popular routes from Unknown Region</Link>
            <Link href="#">Popular destinations from Unknown Region</Link>
            <Link href="#">Popular regions from Unknown Region</Link>
          </AccordionDetails>
        </Accordion>
      </div>
    </footer>
  );
};

export default Footer;
