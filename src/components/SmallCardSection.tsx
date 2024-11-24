import SmallCard from "./SmallCard";

const SmallCardSection = () => {
  return (
    <div className="my-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  );
};

export default SmallCardSection;
