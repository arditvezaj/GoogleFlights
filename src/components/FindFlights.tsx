import Link from "./atoms/Link";

const FindFlights = () => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-lg text-black mb-5">
        Find cheap flights on popular routes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Link href="#">Flights from New York to London</Link>
        <Link href="#">Flights from New York to Paris</Link>
        <Link href="#">Flights from London to Paris</Link>
        <Link href="#">Flights from New York to Rome</Link>
        <Link href="#">Flights from Montreal to Paris</Link>
        <Link href="#">Flights from London to Milan</Link>
        <Link href="#">Flights from Toronto to London</Link>
        <Link href="#">Flights from New York to Milan</Link>
        <Link href="#">Flights from London to Dubai</Link>
        <Link href="#">Flights from London to Tokyo</Link>
        <Link href="#">Flights from Madrid to Rome</Link>
        <Link href="#">Flights from London to Delhi</Link>
        <Link href="#">Flights from New York to Los Angeles</Link>
        <Link href="#">Flights from Paris to Marrakech</Link>
        <Link href="#">Flights from Sao Paulo to London</Link>
        <Link href="#">Flights from London to Istanbul</Link>
        <Link href="#">Flights from Paris to Bangkok</Link>
        <Link href="#">Flights from New York to Orlando</Link>
        <Link href="#">Flights from London to Berlin</Link>
        <Link href="#">Flights from Chicago to Paris</Link>
        <Link href="#">Flights from Melbourne to London</Link>
      </div>
    </div>
  );
};

export default FindFlights;
