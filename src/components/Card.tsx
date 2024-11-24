const Card = () => {
  return (
    <div className="rounded-lg w-[200px]">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Card"
        className="w-full h-[120px] object-cover rounded-xl"
      />
      <div className="flex flex-col items-start mt-3">
        <div className="flex justify-between w-full">
          <h1 className="text-black font-semibold">New York</h1>
          <h1 className="text-black font-semibold">US $100</h1>
        </div>
        <p className="text-gray-600 text-sm my-1">5 jan - 5 feb</p>
        <p className="text-gray-600 text-sm">1 stop. 2 hrs</p>
      </div>
    </div>
  );
};

export default Card;
