const Sidebar = ({ listName, addCredit, remainingCredit }) => {
  let num = 0;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-6 ">
        <h2 className="text-[#2F80ED] font-bold text-lg pb-4 border-b-2 border-[#1c1b1b33]">
          Credit Hour Remaining <span> {remainingCredit} </span> hr
        </h2>
        <h2 className="font-bold text-xl text-[#1C1B1B] pt-4 pb-5">
          Course Name
        </h2>
        <ul className="pb-6 border-b-2 border-[#1c1b1b33] ">
          {listName.map((card, idx) => (
            <li className="pb-2" key={idx}>
              {' '}
              {++num}. {card.name}
            </li>
          ))}
        </ul>
        <p className="font-medium pt-4">
          Total Credit Hour : <span> {addCredit} </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
