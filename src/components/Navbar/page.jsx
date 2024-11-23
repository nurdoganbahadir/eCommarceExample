import { FaRegSun } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-indigo-500 flex justify-between p-4">
      <div>Bahadır Shop</div>
      <form>
        <input
          type="search"
          className="rounded-3xl h-8 p-2"
          placeholder="Search"
        />
      </form>
      <div className="flex gap-9">
        <button>
          <FaRegSun className="text-white w-6 h-6 hover:text-indigo-400" />
        </button>
        <button>
          <FaRegUser className="text-white w-6 h-6 hover:text-indigo-400" />
        </button>
      </div>
    </nav>
  );
}
