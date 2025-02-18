import { useState } from "react";

const Bar_Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
  };

  return (
    <div className="flex justify-center bg-[#ffe500] pb-3 ">
      <div className="flex items-center mt-5 border-2 bg-white border-transparent rounded-lg w-[37em] overflow-hidden font-[Open Sans]">
        <input
          className="border-0 outline-none pl-3 flex-grow"
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-[#efefeb] border-0 py-2 px-5 cursor-pointer text-lg flex items-center"
          type="submit"
          onClick={handleSearch}
        >
          <img src="search-svgrepo-com.svg" alt="Buscar" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Bar_Search;
