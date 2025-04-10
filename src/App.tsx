import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <div className="main-layer">
      <div className="container">
        <h1 className="container-title">Recipe Finder</h1>
        <Searchbar/>
      </div>
    </div>
  );
};

export default App;
