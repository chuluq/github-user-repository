import "./styles.css";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h1 className="card-name">{repo.name}</h1>
      <div className="card-details">
        <p className="card-id">ID: {repo.id}</p>
        <p className="card-lang">Language: {repo.lang ?? "-"}</p>
      </div>
    </div>
  );
};

export default RepoItem;
