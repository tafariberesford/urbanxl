import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Albums from "./components/Albums";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Routes
          Home: "/",  "/reviewdetail/:id" */}
      <Navbar />
      <Route exact path="/">
        Home Page
      </Route>
      <Route path="/urban-albums">
        <Albums />
      </Route>
      <Albums />
      <Footer />
    </div>
  );
}

export default App;
