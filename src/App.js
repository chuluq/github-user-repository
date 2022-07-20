import Header from "./components/Header";
import Search from "./components/Search";

// context
import GithubState from "./context/GithubState";

function App() {
  return (
    <GithubState>
      <Header />
      <main className="container">
        <Search />
      </main>
    </GithubState>
  );
}

export default App;
