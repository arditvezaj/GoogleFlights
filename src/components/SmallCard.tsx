const SmallCard = () => {
  return (
    <div className="rounded-lg w-[150px] relative">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Card"
        className="w-full h-[120px] object-cover rounded-xl"
      />
      <p className="absolute bottom-2 left-3 text-white font-semibold">
        New York
      </p>
    </div>
  );
};

export default SmallCard;
