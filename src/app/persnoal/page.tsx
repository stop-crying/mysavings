import Image from "next/image";

interface persnoalProps {
  toDo: string;
  price: number;
  image: string;
}
[];

export default function Personal({ toDo, price, image }: persnoalProps) {
  return (
    <main className=" w-full mt-3 flex items-center justify-center flex-col gap-8">
      <div className="w-full h-[70px] bg-[#2d2f3f] rounded-3xl drop-shadow-xl shadow-xl flex items-center justify-between gap-6 p-7 hover:-translate-y-1 duration-300">
        <span className="flex items-center justify-center gap-5">
          <Image src={image} alt="" width={24} height={24} />
          <span className="flex flex-col justify-start items-start gap-3">
            <b className="text-xl font-extrabold tracking-widest">{toDo}</b>
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
            <b className="text-xl font-extrabold tracking-widest">£{price}</b>
          </span>
          <span className="w-[7px] h-[7px] bg-[#da8113] rounded-full"></span>
        </span>
      </div>
      {/* <div className="w-full h-[70px] bg-[#2d2f3f] rounded-3xl drop-shadow-xl shadow-xl flex items-center justify-between p-7 gap-6 hover:-translate-y-1 duration-300 ">
        <span className="flex items-center justify-center gap-5">
          <Image src={apartment} alt="" />
          <span className="flex flex-col justify-start items-start gap-3">
            <b className="text-xl font-extrabold tracking-widest">
              Rent a new apartment
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
            <b className="text-xl font-extrabold tracking-widest">£1000</b>
          </span>
          <span className="w-[7px] h-[7px] bg-[#da8113] rounded-full"></span>
        </span>
      </div> */}
      {/* <div className="w-full h-[70px] bg-[#2d2f3f] rounded-3xl drop-shadow-xl shadow-xl flex items-center justify-between p-7 gap-6 hover:-translate-y-1 duration-300 ">
        <span className="flex items-center justify-center gap-5">
          <Image src={gadget} alt="" />
          <span className="flex flex-col justify-start items-start gap-3">
            <b className="text-xl font-extrabold tracking-widest">New Laptop</b>
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
            <b className="text-xl font-extrabold tracking-widest">£1100</b>
          </span>
          <span className="w-[7px] h-[7px] bg-[#da8113] rounded-full"></span>
        </span>
      </div> */}
    </main>
  );
}
