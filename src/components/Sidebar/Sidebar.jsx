const Sidebar = ({ listName }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-6 ">
        <h2 className="text-[#2F80ED] font-bold text-lg pb-4 border-b-2 border-[#1c1b1b33]">
          Credit Hour Remaining <span>7</span> hr
        </h2>
        <h2 className="font-bold text-xl text-[#1C1B1B] pt-4 pb-5">
          Course Name
        </h2>
        <ul className="pb-6 border-b-2 border-[#1c1b1b33] ">
          <li>{listName.name}</li>
          {/* <li>Introduction to c programming</li>
          <li>Introduction to C++</li>
          <li>Software Engineering</li> */}
        </ul>
        <p className="font-medium pt-4">
          Total Credit Hour : <span>13</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
