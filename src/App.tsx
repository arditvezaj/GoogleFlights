import Header from "./components/Header";
import Search from "./Search";
import CardsSection from "./components/CardsSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-[200px]">
      <Header />
      <Search />
      <CardsSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
