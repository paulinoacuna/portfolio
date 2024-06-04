import NavBar from "../components/NavBar/NavBar";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <NavBar items={["Home", "Contact"]} />
      <Home />
      <Contact />
    </>
  );
}

export default App;
