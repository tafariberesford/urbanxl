import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Albums from "./components/Albums";
import AlbumsData from "./components/AlbumsData";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Routes
          Home: "/",  "/reviewdetail/:id" */}
      <Navbar />
      <Route exact path="/">
        Urban XL Home
      </Route>
      <Route path="/urban-albums">
        <Albums />
      </Route>
      {/* <Albums /> */}
      <Route exact path="/albums/:id">
        <AlbumsData />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
