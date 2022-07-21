import { useState } from "react";

// components
import RepoItem from "../RepoItem";

// context
import { useGithubContext } from "../../hooks/useGithubContext";

import "./styles.css";

const Repos = () => {
  const { repos, user, getUserRepos } = useGithubContext();

  const [page, setPage] = useState(30);

  const handleChange = (e) => {
    const { value } = e.target;
    setPage(value);

    if (!user.name && !value) {
      return;
    }

    getUserRepos(user.name, value);
  };

  return (
    <div className="repos">
      {user && repos.length > 0 && (
        <div className="repos-header">
          <h3 className="repos-name">{user.name}'s Repositories</h3>
          <div className="repos-select">
            <select value={page} onChange={handleChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>Default</option>
            </select>
          </div>
        </div>
      )}
      <div className="repos-content">
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repos;
