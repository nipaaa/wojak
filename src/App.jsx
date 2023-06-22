import "./App.css";
import Banner from "./components/Banner";
import Gain from "./components/Gain";
import Header from "./components/Header";
import Why from "./components/Why";

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Banner />
      <Gain />
      <Why />
    </div>
  );
}

export default App;
