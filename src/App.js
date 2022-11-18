import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Loading...");

  useEffect(() => {
    setAdvice("Loading...");
    getAdvice();
  }, [advice]);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <div className="card">
        <h3 className="heading">{advice}</h3>
        <button className="button" onClick={() => getAdvice()}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
