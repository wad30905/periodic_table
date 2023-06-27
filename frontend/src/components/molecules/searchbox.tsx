import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [searchStr, setSearchStr] = useState<string>("");

  return (
    <form
      className="search-box"
      onSubmit={(e) => {
        navigate(`/search/${searchStr}`);
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e: any) => setSearchStr(e.target.value)}
        value={searchStr}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBox;
