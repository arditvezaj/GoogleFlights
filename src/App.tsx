import Header from "./components/Header";
import Search from "./components/Search";
import CardsSection from "./components/CardsSection";
import SmallCardSection from "./components/SmallCardSection";
import FAQ from "./components/FAQ";
import FindFlights from "./components/FindFlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[400px] md:w-[1000px] 2xl:w-[1200px] mx-auto">
      <Header />
      <Search />
      <CardsSection />
      <SmallCardSection />
      <FAQ />
      <FindFlights />
      <Footer />
    </div>
  );
}

export default App;
