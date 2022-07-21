import RepoItem from "../RepoItem";

// context
import { useGithubContext } from "../../hooks/useGithubContext";

import "./styles.css";

const Repos = () => {
  const { repos } = useGithubContext();

  console.log(repos);

  return (
    <div className="repos">
      {repos?.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
