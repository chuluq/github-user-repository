import { useEffect, useState } from "react";

// components
import AutoComplete from "../AutoComplete";
import Spinner from "../Spinner";

// context
import { useGithubContext } from "../../hooks/useGithubContext";

import "./styles.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const { suggestions, loading, searchUsers, setUser, getUserRepos } =
    useGithubContext();

  const handleChange = (e) => {
    const input = e.currentTarget.value;

    if (!input) {
      return setSearchText("");
    }

    setSearchText(input);
    searchUsers(input);
  };

  useEffect(() => {
    if (suggestions.length === 0) {
      return;
    }

    const handleFilter = () => {
      setActive(0);
      setFiltered(suggestions);
      setIsShow(true);
    };

    handleFilter();
  }, [suggestions]);

  const handleClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setSearchText(e.currentTarget.innerText);
    setUser({ name: e.currentTarget.innerText });
    getUserRepos(e.currentTarget.innerText);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setSearchText(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }

    getUserRepos(searchText);
    setSearchText("");
  };

  return (
    <>
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
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search GitHub username..."
          className="search-input"
          required
        />
        <button className="search-btn">Search</button>
      </form>
      <div className="search-results">
        {loading ? (
          <Spinner />
        ) : (
          <AutoComplete
            active={active}
            filtered={filtered}
            handleClick={handleClick}
            isShow={isShow}
            searchText={searchText}
          />
        )}
      </div>
    </>
  );
};

export default Search;
