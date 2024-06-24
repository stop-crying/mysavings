"use client";

export interface persnoalProps {
    params : {
    toDo: string;
    price: number;
    }
  }
  [];
  

export default function Personal({ params }: persnoalProps) {
  return (
    <div className=" w-full mt-3 flex items-center justify-center flex-col gap-8">
      <div className="w-full  bg-[#2d2f3f] rounded-3xl drop-shadow-xl shadow-xl flex items-center justify-between gap-6 px-7 py-12 hover:-translate-y-1 duration-300">
        <span className="flex items-center justify-center gap-5">
          <span className="w-[7px] h-[7px] bg-[#da8113] rounded-full"></span>
          <span className="flex flex-col justify-start items-start gap-3">
            <b className="text-lg font-light text-white tracking-wide">
              {params.toDo}
            </b>
            <p className="text-[#7b7d8c] font-extralight tracking-wide ">
              Anytime savings.
            </p>
          </span>
        </span>
        <span className="flex items-center justify-center gap-4">
          <span className="flex flex-col justify-start items-start gap-3">
            <p className="text-[#7b7d8c] font-extralight tracking-wide ">
              Goal
            </p>
            <b className="text-base text-white font-bold tracking-wide">
              £{params.price}
            </b>
          </span>
          <span className="w-[7px] h-[7px] bg-[#da8113] rounded-full"></span>
        </span>
      </div>
    </div>
  );
}
