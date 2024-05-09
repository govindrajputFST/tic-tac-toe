import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [value, setValue] = useState(0);
  const [won, setWon] = useState(false);
  const [winner, setWinner] = useState("");
  const [player1point, setPlayer1point] = useState(0)
  const [player2point, setPlayer2point] = useState(0)
  const [diseCount, setDiseCount] = useState(0)
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  let arr1 = ["", "", "", "", "", "", "", "", ""];
  const notify = (message) => toast(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  function handleClickBtnreset() {

    setWon(false);
    setArr(arr1);
    setDiseCount(0);
    setPlayer1point(0);
    setPlayer2point(0);
  }
  function handleClickBtn() {

    setWon(false);
    setArr(arr1);
    setDiseCount(0);
  }
  function handleClick(ind) {

    
    if (!won) {
      arr1 = arr;
      if (value % 2 === 0 && arr1[ind] === "") {
        arr1[ind] = "0";
        setArr(arr1);
        setValue(value + 1);
        setDiseCount(diseCount + 1)
      }
      else if (value % 2 !== 0 && arr1[ind] === "") {
        arr1[ind] = "X";
        setArr(arr1);
        setValue(value + 1);
        setDiseCount(diseCount + 1)
      }
    }

    if (arr1[0] === arr1[1] && arr1[1] === arr1[2] && arr[1] !== "" && arr1[0] !== "" && arr[2] !== "") {
      if (arr[0] === "0") {
        setWon(true);
        setWinner("Player 1 ")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }

    }
    else if (arr1[3] === arr1[4] && arr1[4] === arr1[5] && arr[3] !== "" && arr1[4] !== "" && arr[5] !== "") {
      if (arr[3] === "0") {
        setWon(true);
        setWinner("Player 1 ")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }
    }
    else if (arr1[6] === arr1[7] && arr1[7] === arr1[8] && arr[6] !== "" && arr1[7] !== "" && arr[8] !== "") {
      if (arr[6] === "0") {
        setWon(true);
        setWinner("Player1")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        setWinner("Player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }
    }
    else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== "" && arr1[3] !== "" && arr[6] !== "") {
      if (arr[0] === "0") {
        setWon(true);
        setWinner("player1");
        notify("Player 1 Won")
        setPlayer1point(player1point + 1);
      }
      else {
        setWon(true);
        setWinner("player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }

    }
    else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== "" && arr1[4] !== "" && arr[7] !== "") {
      if (arr[1] === "0") {
        setWon(true);
        setWinner("player1")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        setWinner("player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }

    }
    else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== "" && arr1[5] !== "" && arr[8] !== "") {
      if (arr[2] === "0") {
        setWon(true);
        setWinner("Player1")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        setWinner("Player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }

    }
    else if (arr1[0] === arr1[4] && arr1[4] === arr1[8] && arr[0] !== "" && arr1[4] !== "" && arr[8] !== "") {
      if (arr[0] === "0") {
        setWon(true);
        setWinner("Player1")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        setWinner("Player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }
    }
    else if (arr1[2] === arr1[4] && arr1[4] === arr1[6] && arr[2] !== "" && arr1[4] !== "" && arr[6] !== "") {
      if (arr[2] === "0") {
        setWon(true);
        setWinner("Player1")
        notify("Player 1 Won")
        setPlayer1point(player1point + 1)
      }
      else {
        setWon(true);
        setWinner("Player2")
        notify("Player 2 Won")
        setPlayer2point(player2point + 1)
      }
    }
    else if (diseCount ===8) {

      notify("Match Draw")
    }
  }
  return (
    <>
      <h1 className='headingtic'>Tic Tac Toe  Game</h1>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className='player1'>
          <h1 className='pl1'>Player 1</h1>
          <h1>0</h1>
          <span style={{ color: "green", fontSize: "200px", fontWeight: "600" }}>{player1point}</span>
        </div>

        <div className='mainBox'>
          {arr.map((val, ind) => <div key={ind} className='box' onClick={() => handleClick(ind)}>{val}</div>)}
        </div>
        <div className='player2'>
          <h1 className='pl1'>Player 2</h1>
          <h1>X</h1>
          <span style={{ color: "green", fontSize:"200px", fontWeight: "600" }}>{player2point}</span>
        </div>

      </div>
      {(won || diseCount === 9) && <button className='btn' onClick={handleClickBtn}>Play Again</button>}
     {(won || diseCount === 9)&& <button className='rbtn' onClick={handleClickBtnreset}> Reset  </button>}
      {(won) && <div className='plwon'>{winner} won </div>}
    </>
  );
}

export default App;