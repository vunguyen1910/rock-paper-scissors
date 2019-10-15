import React, { useState } from 'react';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import {CHOICES, getRoundOutcome} from "./utils";
import ChoiceButton from "./components/ChoiceButton.js";

export default function App() {
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  const onPlayerChoose = playerChoice =>{
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserPlayerChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserPlayerChoice);
    setComputerChoice(newComputerChoice);
    if(result === "Victory!") setPreviousWinner("You");
    else if(result === "Defeat!") setPreviousWinner("Computer");
    else setPreviousWinner("Tie");
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);   
    console.log(result, compChoice);
  };

  const [previousWinner, setPreviousWinner] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice,setComputerChoice] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  return (
    <div className="App">
  <div className="container">
    <div className="row mb-3">
      <div className="col-md-8 themed-grid-col">
        <ChoiceCard 
          title="You"
          previousWinner={previousWinner}
          imgURL={playerChoice && playerChoice.url}
        />
        <h1>{prompt}</h1>
        <ChoiceCard
          title="Computer"
          previousWinner={previousWinner}
          imgURL={computerChoice && computerChoice.url}
        />
        <ChoiceButton
          onPlayerChoose={onPlayerChoose}
        />
      </div>
    </div>
      <div className="col-md-4 themed-grid-col">
        <h3>History</h3>
        <ul>
          {gameHistory.map((result,i) => {
            return <li key={result + i}>{result}</li>;
          })}
        </ul>
      </div>
  </div>
</div>
)}