import {
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 p-7 text-gray-600">
      <Divider className="w-full" />
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-sm text-center w-[650px]">
          Current language and currency options applied: English (United
          Kingdom) - Unknown Region - USD Displayed currencies may differ from
          the currencies used to purchase flights.{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Learn more
          </a>
        </p>
        <div className="flex gap-7">
          <a href="#" className="text-blue-500 hover:text-blue-400">
            About
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Privacy
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Terms
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Join user studies
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Feedback
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Help Centre
          </a>
        </div>
      </div>
      <Divider className="w-full" />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </footer>
  );
};

export default Footer;
