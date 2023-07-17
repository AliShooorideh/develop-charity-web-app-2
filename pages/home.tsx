import BottomSheet from "@/components/BottomSheet";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState<string>();
  return (
    <div className="relative h-screen w-screen">
      <div className="flex flex-col bg-[#b772e6] px-6 pt-10 pb-10">
        <span className="text-3xl text-white">
          Hello ,<span className="font-bold">Ali</span>
        </span>
        <span className="text-white opacity-70 ">Do Good Deeds Todey</span>
        <div className="my-14 flex items-center justify-between rounded-full bg-purple-600 py-4 px-4">
          <input
            className="bg-transparent pl-6 placeholder:font-bold placeholder:text-white placeholder:opacity-70"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
          />
          <div className="rounded-full bg-[#b772e6] p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div>
          <span className="text-2xl font-semibold text-white opacity-60">
            Categories
          </span>
          <div className="mt-5 flex justify-between">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-3xl bg-purple-600 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <span className="text-white">Health</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-3xl bg-purple-600 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <span className="text-white">Education</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-3xl bg-purple-600 p-4">
                <Image
                  className="w-full "
                  src={"/images/001.png"}
                  loading="lazy"
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <span className="text-white">Health</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 px-6">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Donation Name</span>
          <span className="rounded-full bg-[#ff5eaa] px-6 py-1 text-sm font-bold text-white">
            Donate
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b772e6"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-bold opacity-40">5 Dey Left</span>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b772e6"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className="text-sm font-bold opacity-40">$ 1.243</span>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center space-x-5">
        <div className="h-5 w-5 rounded-full bg-[#b772e6]" />
        <div className="h-5 w-5 rounded-full border-2 border-[#b772e6]" />
        <div className="h-5 w-5 rounded-full border-2 border-[#b772e6]" />
      </div>
      <div className="flex justify-center">
        <BottomSheet type="white" />
      </div>
    </div>
  );
};
export default HomePage;
