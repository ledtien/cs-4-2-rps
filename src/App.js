import "./App.css";
import {
  Navbar,
  Form,
  InputGroup,
  FormControl,
  Button,
  Container,
  ButtonGroup,
} from "react-bootstrap";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import React, { useState } from "react";

const shapes = ["rock", "paper", "scissors"];

function ChoiceCard(props) {
  return (
    <div
      className={`choice-card m-5 ${
        props.result === "win"
          ? "border-success"
          : props.result === "loss"
          ? "border-danger"
          : "border-dark"
      }`}
    >
      <h2>{props.title}</h2>
      <img
        src={
          props.shape === "rock"
            ? rock
            : props.shape === "paper"
            ? paper
            : scissors
        }
        alt={props.shape}
      />
      <h3>
        {props.result === "win"
          ? "WIN"
          : props.result === "loss"
          ? "LOSS"
          : "TIE"}
      </h3>
      <h4>{props.score}</h4>
    </div>
  );
}

function App() {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("tie");
  const [playerResult, setPlayerResult] = useState("tie");
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);
  const [Name, setName] = useState("You");
  let streak = 0;

  const restart = () => {
    setPlayerChoice("");
    setPlayerResult("tie");
    setPlayerScore(0);
    setComputerChoice("");
    setComputerResult("tie");
    setComputerScore(0);
  };
  const changeName = (e) => {
    if (e.target.value) {
      setName(e.target.value);
    } else {
      setName("You");
    }
  };

  function PublicNavbar() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
    );
  }
  const randomMove = (move) => {
    let newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // let newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    setComputerChoice(newComputerChoice);
    setPlayerChoice(move);
    // console.log("Player:", newPlayerChoice);
    // console.log("Computer:", newComputerChoice);
    calculateWinner(newComputerChoice, move);
  };

  const calculateWinner = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
      setComputerResult("tie");
      setPlayerResult("tie");
    } else if (computerChoice === "rock") {
      if (playerChoice === "paper") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setPlayerResult("win");
        }

        setComputerResult("loss");
        setPlayerScore(playerScore + 1);
      } else {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setComputerResult("win");
        }
        setPlayerResult("loss");
        setComputerScore(computerScore + 1);
      }
    } else if (computerChoice === "paper") {
      if (playerChoice === "scissors") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setPlayerResult("win");
        }
        setComputerResult("loss");
        setPlayerScore(playerScore + 1);
      } else {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setComputerResult("win");
        }
        setPlayerResult("loss");
        setComputerScore(computerScore + 1);
      }
    } else {
      if (playerChoice === "rock") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setPlayerResult("win");
        }
        setComputerResult("loss");
        setPlayerScore(playerScore + 1);
      } else {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setPlayerResult("Flawless Vicroty");
        } else {
          setComputerResult("win");
        }
        setPlayerResult("loss");
        setComputerScore(computerScore + 1);
      }
    }
    console.log(streak);
  };

  return (
    <div className="App text-center">
      <PublicNavbar />
      <Container>
        Username: <input class="m-3" onChange={(e) => changeName(e)}></input>
        <div className="d-flex justify-content-center flex-wrap">
          <ChoiceCard
            title={Name}
            result={playerResult}
            shape={playerChoice}
            score={playerScore}
          />
          <ChoiceCard
            title="Computer"
            result={computerResult}
            shape={computerChoice}
            score={computerScore}
          />
        </div>
        <ButtonGroup>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("rock")}
          >
            Play 👊
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("paper")}
          >
            Play 🤚
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("scissors")}
          >
            Play ✌
          </Button>
        </ButtonGroup>
        <Button onClick={restart}> Restart</Button>
      </Container>
    </div>
  );
}

export default App;
