import Header from "./components/Header";
import Search from "./components/Search";
import Repos from "./components/Repos";

// context
import GithubState from "./context/GithubState";

function App() {
  return (
    <GithubState>
      <Header />
      <main className="container">
        <Search />
        <Repos />
      </main>
    </GithubState>
  );
}

export default App;
