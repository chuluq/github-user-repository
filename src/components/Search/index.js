import { useState } from "react";
import { useGithubContext } from "../../hooks/useGithubContext";
import "./styles.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { users, loading, searchUsers } = useGithubContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }

    searchUsers(searchText);
    setSearchText("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search GitHub username..."
        className="search-input"
        required
      />
      <button className="search-btn">Search</button>
    </form>
  );
};

export default Search;
