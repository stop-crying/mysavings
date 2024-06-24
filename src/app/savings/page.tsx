"use client";

import Popup from "reactjs-popup";
import { savingsArray } from "../components/PersornalSavings";
import Personal from "../persnoal/page";
import { useState } from "react";

export default function Savings() {
  const [name, setName] = useState<string>("");
  const [goal, setGoal] = useState<number>(0);
  const [arr, setArr] = useState([
    {
      todo: "",
      price: 0,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const GoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(parseInt(e.target.value));
  };

  const handleClick = () => {
    const newArray = {
      todo: name,
      price: goal,

    };
   
    setArr((a) => [...a, newArray]);

    setGoal(0);
    setName("");
  };

  const handleSaveClick = () => {};

  //   for( let i = 0; i < savingsArray.length; i++ ) {
  //     if(i === savingsArray.length -1 ) {
  //         savingsArray.push(newArray);
  //     }
  //   }

  console.log(savingsArray.length);

  return (
    <div className="w-full flex items-center justify-center flex-col gap-8">
      {savingsArray.map((savings, key) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Personal
           params={{
                toDo: savings.todo,
                price: savings.price
            }} />
        );
      })}
      {
      arr.map((array, key) => {
        return (
         // eslint-disable-next-line react/jsx-key
         <Personal
         params={{
              toDo: array.todo,
              price: array.price
          }} />
        );
      })}
      <div className="w-full mt-5">
        <Popup
          trigger={
            <button className="w-full h-[50px] text-center bg-[#da8113] text-white rounded-3xl text-xl font-bold tracking-widest ">
              Create new savings
            </button>
          }
          modal
          closeOnEscape
        >
          <div className="w-[350px] p-8 flex flex-col items-center justify-center gap-7 bg-[#161720] rounded-2xl drop-shadow-xl shadow-xl duration-300 ease-in-out transition-all">
            <label
              htmlFor=""
              className="w-full text-start text-sm text-[#7b7d8c]"
            >
              Savings Name
            </label>
            <input
              type="text"
              placeholder="Purpose of the savings?"
              onChange={handleChange}
              value={name}
              className="w-full h-[40px] placeholder:text-sm placeholder:font-light pl-5 text-sm font-bold outline-none rounded-xl text-black"
            />
            <label
              htmlFor=""
              className="w-full text-start text-sm mt-8 text-[#7b7d8c]"
            >
              Goal
            </label>
            <input
              type="number"
              placeholder="Goal amount"
              value={goal}
              onChange={GoalChange}
              className="w-full h-[40px] placeholder:text-sm placeholder:font-light pl-5 text-sm font-bold outline-none rounded-xl text-black "
            />
            <button
              className="w-full py-7 text-center bg-[#da8113] text-white rounded-3xl text-sm font-bold tracking-widest hover:-translate-y-1 duration-300 "
              onClick={handleClick}
              type="submit"
            >
              Create
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
}
