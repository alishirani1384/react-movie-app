import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {
const [text, setText] = useState('hey')
  return (
    <div className="App">
      <BrowserRouter>
        <Header setText={setText} />
        <div className="container">
          <Routes>  
            <Route path="/" exact element={<Home text={text} />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
