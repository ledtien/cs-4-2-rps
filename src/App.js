import "./App.css";
import {
  Navbar,
  Form,
  InputGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

const shapes = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let computerResult;
let playerResult;

const calculateWinner = () => {
  if (computerChoice === playerChoice) {
    computerResult = "tie";
    playerResult = "tie";
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      computerResult = "loss";
      playerResult = "win";
    } else {
      computerResult = "win";
      playerResult = "loss";
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "scissors") {
      computerResult = "loss";
      playerResult = "win";
    } else {
      computerResult = "win";
      playerResult = "loss";
    }
  } else {
    if (playerChoice === "rock") {
      computerResult = "loss";
      playerResult = "win";
    } else {
      computerResult = "win";
      playerResult = "loss";
    }
  }
};

const randomMove = () => {
  computerChoice = shapes[Math.floor(Math.random() * 3)];
  playerChoice = shapes[Math.floor(Math.random() * 3)];
  console.log("Player:", playerChoice);
  console.log("Computer:", computerChoice);
};

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
    </div>
  );
}

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

const play = () => {
  randomMove();
  calculateWinner();
};
play();

function App() {
  return (
    <div className="App text-center">
      <PublicNavbar />
      <Container>
        <div className="d-flex justify-content-center flex-wrap">
          <ChoiceCard title="You" result={playerResult} shape={playerChoice} />
          <ChoiceCard
            title="Computer"
            result={computerResult}
            shape={computerChoice}
          />
        </div>
        <Button onClick={play}> Random</Button>
      </Container>
    </div>
  );
}

export default App;
