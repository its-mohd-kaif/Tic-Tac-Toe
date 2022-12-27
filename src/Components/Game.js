import React, { useState } from "react";
import "./Game.css";

function Game() {
  // State For Counter
  const [count, setCount] = useState(0);
  //   State For Display result
  const [res, setRes] = useState("");
  //  Winning Combination Array
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //   OnClick Function
  const valueHandler = (e) => {
    //Increase Counter
    setCount((val) => ++val);
    // Make a temp and store id of div
    let temp = e.target.id;
    // store grid-item class into grid variable
    let grid = document.getElementsByClassName("grid-item");
    for (let i = 0; i < grid.length; i++) {
      // Check Conditions
      if (temp === grid[i].id && count % 2 === 0 && grid[i].innerHTML === "") {
        grid[i].innerHTML = "X";
      } else if (
        temp === grid[i].id &&
        count % 2 === 1 &&
        grid[i].innerHTML === ""
      ) {
        grid[i].innerHTML = "0";
      } else if (grid[i].innerHTML !== "" && temp === grid[i].id) {
        setCount((val) => --val);
      }
    }
    // Traverse loop inside combinations and check pattern
    for (let i = 0; i < combinations.length; i++) {
      // Array Distruct
      const [a, b, c] = combinations[i];
      if (
        grid[a].innerHTML === "X" &&
        grid[b].innerHTML === "X" &&
        grid[c].innerHTML === "X"
      ) {
        setRes("X Win The Match !!");
      } else if (
        grid[a].innerHTML === "0" &&
        grid[b].innerHTML === "0" &&
        grid[c].innerHTML === "0"
      ) {
        setRes("0 Win The Match !!");
      } else if (count === 8 && res === "") {
        setRes("Draw");
      }
    }
  };
  // Reset Handler
  const resetHandler = () => {
    window.location.reload(false);
  };

  return (
    <section>
      <center>
        <h1 style={{ fontSize: "35px" }}>Tic Tac Toe</h1>
        <h2 className="result">{res}</h2>
        <div className="container">
          <div className="grid-container">
            <div onClick={valueHandler} id={0} className="grid-item"></div>
            <div onClick={valueHandler} id={1} className="grid-item"></div>
            <div onClick={valueHandler} id={2} className="grid-item"></div>
            <div onClick={valueHandler} id={3} className="grid-item"></div>
            <div onClick={valueHandler} id={4} className="grid-item"></div>
            <div onClick={valueHandler} id={5} className="grid-item"></div>
            <div onClick={valueHandler} id={6} className="grid-item"></div>
            <div onClick={valueHandler} id={7} className="grid-item"></div>
            <div onClick={valueHandler} id={8} className="grid-item"></div>
          </div>
          <div>
            <button className="resetBtn" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </div>
      </center>
    </section>
  );
}

export default Game;
