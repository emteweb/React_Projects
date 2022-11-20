import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import NotFound from "./components/notFound";
import NewMovieWrapper from "./components/newMovieWrapper";

class App extends Component {
  render() {
    return (
      <main className="container">
          <Navbar/>
          <div className="content">
          <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/movies/:id" element={<NewMovieWrapper/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="/" element={<Movies/>}/>
          </Routes>
          </div>
      </main>
    );
  }
}

export default App;
