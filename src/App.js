import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./Data";


function App() {
  const cards = Data.map(item => {
    return(
      <Main 
        {...item}
      />
    )
  })

  return (
    <div className="container row">
      <Header />
      {cards}
    </div>
  );
}

export default App;
