import "./App.css";
import PercentageCalculator from "./components/PercentageCalculator";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <span id="percentage">Percentage</span><span id="calc">Calc</span><div id="dot" />
        </div>
      </header>  
      <main>
        <PercentageCalculator />
      </main>
      <footer>
        <p>Made with ❤️  by Krupa Panchal</p>
      </footer>
    </div>
  )
}

export default App;