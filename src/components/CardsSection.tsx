import Card from "./Card";

const CardsSection = () => {
  return (
    <div className="p-4 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsSection;
