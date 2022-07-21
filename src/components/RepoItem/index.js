import "./styles.css";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <div className="card-details">
        <h1 className="card-name">{repo.name}</h1>
        <div>
          <p className="card-id">ID: {repo.id}</p>
          <p className="card-lang">Language: {repo.lang ?? "-"}</p>
        </div>
      </div>
      <span className="material-symbols-outlined">info</span>
    </div>
  );
};

export default RepoItem;
