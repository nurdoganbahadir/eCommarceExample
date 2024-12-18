"use client";

import { useRouter } from "next/navigation";
import { FaRegSun } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  const route = useRouter();

  return (
    <nav className="bg-primary">
      <div className="container max-w-6xl flex justify-between m-auto p-4">
        <div onClick={() => route.push("/")} className="cursor-pointer">
          <img src="./logo.png" alt="" className="w-20 h-10" />
        </div>
        <form className="relative max-w-md">
          <input
            type="search"
            className="w-full rounded-md h-10 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none placeholder-gray-400"
            placeholder="Search for something..."
          />
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <IoSearch size={18} />
          </span>
        </form>
        <div className="flex gap-5">
          <button>
            <FaRegSun className="text-white w-6 h-6 hover:text-secondary" />
          </button>
          <button>
            <FaRegUser className="text-white w-6 h-6 hover:text-secondary" />
          </button>
        </div>
      </div>
    </nav>
  );
}
