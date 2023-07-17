import BottomSheet from "@/components/BottomSheet";
import { useRouter } from "next/router";

const Donate = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mt-8 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
          onClick={() => router.back()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col text-xl">
            <span className="font-bold">Donation Name</span>
            <span>Compaign</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff5eaa"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 h-screen bg-[#b772e6] px-6 pt-12">
        <span className="text-lg font-bold text-white opacity-70">
          Select Amount
        </span>
        <div className="mt-5 mb-16 flex justify-between">
          <div className="rounded-3xl bg-purple-600 px-6 py-4">
            <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#b772e6]">
              <span className="text-2xl font-bold text-white">$</span>
            </div>
            <span className="font-bold text-white">$10.00</span>
          </div>
          <div className="rounded-3xl bg-purple-600 px-6 py-4">
            <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#b772e6]">
              <span className="text-2xl font-bold text-white">$</span>
            </div>
            <span className="font-bold text-white">$20.00</span>
          </div>
          <div className="rounded-3xl bg-purple-600 px-6 py-4">
            <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#b772e6]">
              <span className="text-2xl font-bold text-white">$</span>
            </div>
            <span className="font-bold text-white">$30.00</span>
          </div>
        </div>
        <span className="text-lg font-bold text-white opacity-70">
          Peyment method
        </span>
        <div className="mt-6 flex justify-between">
          <span className="w-40 rounded-full bg-purple-600 px-12 py-3 text-center text-xl font-bold text-white">
            Credit Card
          </span>
          <span className="w-40 rounded-full bg-purple-600 px-12 py-3 text-center text-xl font-bold text-white">
            Bank Transfer
          </span>
        </div>
        <div className="flex justify-center">
          <button className="mt-20 w-full shadow-xl rounded-full bg-white py-4 text-xl font-bold text-[#b772e6] ">
            Donate
          </button>
          <BottomSheet type="purple" />
        </div>
      </div>
    </div>
  );
};
export default Donate;
