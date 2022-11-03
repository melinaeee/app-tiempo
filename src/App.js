import React from "react";
import './App.css';
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Melina and is{" "}
          <a
            href="https://github.com/melinaeee/app-tiempo"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
