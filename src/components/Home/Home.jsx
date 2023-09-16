import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [listName, setListName] = useState([]);
  const [addCredit, setAddCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  // swal('Oops...', "Can't add the same course Twice!", 'info');

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleClick = (selectedCard) => {
    const isPresent = listName.find((item) => item.id == selectedCard.id);
    let count = ~~selectedCard.credit;
    // console.log(count);

    if (isPresent) {
      // console.log(isPresent);
      return swal('You already selected this course!', '', 'warning');
    } else {
      listName.forEach((itemCredit) => {
        count = ~~count + ~~itemCredit.credit;
      });
      // console.log(count);
      if (count > 20) {
        return swal("Credit can't exceed 20 hours", '', 'warning');
      }

      setAddCredit(count);
      setListName([...listName, selectedCard]);
      setRemainingCredit(20 - count);
    }
  };

  return (
    <div className="flex gap-6 pb-20">
      <div className="grid grid-cols-3 w-3/4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="card  bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <img src={card.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-4">
              <h2 className="text-lg font-semibold text-left">{card.name}</h2>
              <p className="text-left text-sm ">{card.details}</p>
              <div className="flex gap-[18px] pt-[12px] pb-[17px] font-medium">
                <div className="flex">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 1V23"
                      stroke="#1C1B1B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="#1C1B1B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Price: {card.price}</p>
                </div>
                <div className="flex">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                      stroke="#1C1B1B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    Credit: <span>{card.credit}</span>hr
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleClick(card)}
                  className="btn bg-[#2F80ED] text-white hover:border-[#2F80ED] hover:bg-[#e8eef7] hover:text-[#2F80ED]  font-semibold text-lg w-full"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4">
        <Sidebar
          listName={listName}
          addCredit={addCredit}
          remainingCredit={remainingCredit}
        ></Sidebar>
      </div>
    </div>
  );
};

export default Home;
