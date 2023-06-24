import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Header from "./components/Header";
import JoinUs from "./components/JoinUs";
import Prize from "./components/Prize";
import RoadMap from "./components/RoadMap";
import Why from "./components/Why";

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Banner />
      <Gain />
      <Why />
      <Prize />
      <RoadMap />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
