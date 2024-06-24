"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Personal from "./persnoal/page";
import saving from "/Users/mac/Desktop/mysavings/assets/savinngs.svg";
import { useState } from "react";
import { savingsArray } from "./components/PersornalSavings";
import Popup from "reactjs-popup";
import Savings from "./savings/page";

export default function Home() {
  const [value, setValue] = useState<number>(0);

  let change: number;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change = parseInt(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between  bg-[#353747] relative">
      <div className="h-full w-full flex items-center justify-center flex-col">
        {/* <span className="w-full flex items-center justify-center p-10 gap-3 sticky top-0">
        
         
        </span> */}
        <div className="w-full flex flex-col gap-10 items-center justify-center bg-[#353747] p-10 ">
          <span className="w-full flex flex-col justify-center items-center gap-12 fixed top-0 left-0 right-0 z-10 bg-[#353747] py-10">
          <h1 className="text-base tracking-wide font-light text-white ">
            My Savings
          </h1>
          <b className="text-[45px] font-extrabold text-white tracking-wider duration-300  w-full  text-center bg-[#353747]">
            £{value}
          </b>
          </span>
          <p className="text-[#797b8a] font-extralight mb-5 mt-64">
            Total amount saved so far
          </p>
          <hr
            style={{
              color: "#3f4251",
              height: 1,
              width: "100%",
              backgroundColor: "#3f4251",
              borderColor: "#3f4251",
            }}
            className="shadow-2xl"
          />
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center bg-[#353747] py-10 px-5">
          <h2 className="w-full text-start font-light tracking-wide  text-[#797b8a]">
            Personal Savings
          </h2>
          <Savings />
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-10 px-5">
          <p className="w-full text-start font-light tracking-wide text-[#797b8a] ">
            One Click Saving
          </p>
          <div className="w-full my-5 grid grid-cols-2 items-center justify-center gap-7">
            <div className="flex items-center justify-center">
              <Popup
                trigger={
                  <button className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl">
                    Custom
                  </button>
                }
                modal
              >
                <div className="w-[350px] p-10 flex flex-col items-center justify-center gap-5 bg-[#161720] rounded-2xl drop-shadow-xl shadow-xl duration-300 ease-in-out transition-all">
                  <input
                    type="number"
                    placeholder="how much do you wish to save?"
                    onChange={handleChange}
                    className="w-full h-[40px] placeholder:text-sm placeholder:font-light pl-5 text-sm font-bold outline-none rounded-xl text-black"
                  />
                  <button
                    className="w-full py-7 text-center bg-[#da8113] text-white rounded-3xl text-sm font-bold tracking-wide hover:-translate-y-1 duration-300 "
                    onClick={() => {
                      setValue(change + value);
                    }}
                  >
                    Enter Amount
                  </button>
                </div>
              </Popup>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl"
                onClick={() => setValue(value + 10)}
              >
                £10
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl"
                onClick={() => setValue(value + 15)}
              >
                £15
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl"
                onClick={() => setValue(value + 25)}
              >
                £25
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl"
                onClick={() => setValue(value + 50)}
              >
                £50
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[100px] h-[45px] bg-[#fe8d18] text-sm text-white  tracking-wide font-light rounded-2xl"
                onClick={() => setValue(value + 100)}
              >
                £100
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-5  ">
          <button
            className="w-full py-6 text-center bg-[#da8113] text-white rounded-3xl text-sm font-bold tracking-wide hover:-translate-y-1 duration-300 "
            onClick={() => {
              setValue(value);
            }}
          >
            Update Savings Amount
          </button>
        </div>
      </div>
    </main>
  );
}
