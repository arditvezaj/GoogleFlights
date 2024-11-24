import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div className="flex flex-col text-gray-600">
      <h1 className="font-semibold text-lg text-black mb-5">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I find last-minute flight deals?
        </AccordionSummary>
        <AccordionDetails>
          Finding last-minute flights is easy on Google Flights. Select your
          departure and destination cities in the form on the top of the page,
          and use the calendar to pick travel dates and find the lowest fares
          available. You can even check for flights departing today. To find the
          cheapest fares, it's usually best to book at least a few weeks in
          advance for domestic flights and a few months in advance for
          international travel.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I find cheap flights for a weekend getaway?
        </AccordionSummary>
        <AccordionDetails>
          It's easy to use Google Flights to find deals on weekend getaways or
          even week-long trips. Just enter your departure and destination cities
          near the top of the page. Then, open the date selector and choose a
          trip length to see how the round-trip fare changes on different days.
          Adjust the trip type to see one-way fares. The cheapest available
          flights are highlighted and easy to spot. Once you settle on dates,
          select Search to see flight options and book the deal.
        </AccordionDetails>
        <AccordionDetails>
          You can also turn on price tracking to get alerts if the price changes
          for a route or flight.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I find flight deals if my travel plans are flexible?
        </AccordionSummary>
        <AccordionDetails>
          It's easy to search for flights, even if your plans are up in the air.
          <ul>
            <li>
              1. Tap <strong>Explore</strong> near the top of the page
            </li>
            <li>2. Then, tap the calendar icon</li>
            <li>
              3. Toggle to <strong>Flexible dates</strong> and select a time
              frame or trip length
            </li>
            <li>4. Tap done</li>
          </ul>
          3. Toggle to Flexible dates and select a time frame or trip length 4.
          Tap done Trip options will appear on the map, with the cheapest
          available flights highlighted and easy to spot. Tap the destination to
          see available flight options you can select and book.
        </AccordionDetails>
        <AccordionDetails>
          Price insights and other useful tools can help you find more options
          that work for your schedule and budget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I find cheap flights to anywhere?
        </AccordionSummary>
        <AccordionDetails>
          You can find cheap flight deals to anywhere in the world on Google
          Flights. Just enter your departure city, choose
          <strong> Anywhere</strong> as the destination and select
          <strong> Explore</strong>. You can pick specific dates or leave
          departure and return dates blank if your plans are flexible. The
          cheapest fares to popular destinations will appear. You can filter the
          results to see only non-stop flights or flights under a certain price
          to more easily plan your perfect budget trip.
        </AccordionDetails>
        <AccordionDetails>
          If you already have a destination in mind, you can turn on price
          tracking to get alerts if the fare changes for a route or flight.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I get flight alerts for my trip?
        </AccordionSummary>
        <AccordionDetails>
          You can track flight prices for specific dates or, if your plans are
          flexible, any dates. To get flight alerts for a specific round trip,
          choose your dates and flights and select <strong>Search</strong>.
          Then, you can turn on price tracking.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
