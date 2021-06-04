import cx from 'classnames';
import * as React from "react";
import './Toggles.css';
import {AppContext} from "../AppContext";

export function SolveToggle() {

  const {board, numberOfTurns, submitSolution} = React.useContext(AppContext);

  const checkIfSolved = (optionToCheck) => {
    for (let j = 0; j < 12; j++) {
      for (let i = 0; i < 6; i++) {
        if (optionToCheck[j][i] > 0) {
          return false;
        }
      }
    }
    return true;
  }

  const checkForMatches = (options, optionIdx) => {
    let currentBoard = options[optionIdx].currentBoard;

    let toDelete = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]];

    for (let j = 0; j < 12; j++) {
      for (let i = 0; i < 6; i++) {
        if (currentBoard[j][i] !== 0 && currentBoard[j][i] === currentBoard[j][i+1] && currentBoard[j][i] === currentBoard[j][i+2]) {
          toDelete[j][i] = 1;
          toDelete[j][i+1] = 1;
          toDelete[j][i+2] = 1;
        }
        if (j < 10 && currentBoard[j][i] !== 0 && currentBoard[j][i] === currentBoard[j+1][i] && currentBoard[j][i] === currentBoard[j+2][i]) {
          toDelete[j][i] = 1;
          toDelete[j+1][i] = 1;
          toDelete[j+2][i] = 1;
        }
      }
    }

    let matchWasFound = false

    for (let j = 0; j < 12; j++) {
      for (let i = 0; i < 6; i++) {
        if (toDelete[j][i]) {
          if (!matchWasFound) {
            matchWasFound = true;
          }
          options[optionIdx].currentBoard[j][i] = 0;
        }
      }
    }

    return matchWasFound;
  }


  const makeBlocksFall = (options, optionIdx) => {
    let currentBoard = options[optionIdx].currentBoard;
    let blockFell = false;

    for (let j = 0; j < 11; j++) {
      for (let i = 0; i < 6; i++) {
        if (currentBoard[j][i] > 0 && currentBoard[j+1][i] === 0) {
          if (!blockFell) {
            blockFell = true;
          }
          currentBoard[j+1][i] = currentBoard[j][i];
          currentBoard[j][i] = 0;
        }
      }
    }

    return blockFell;
  }

  const solve = () => {
    let options = [];
    let newOptions = [];
    for (let turns = 0; turns < numberOfTurns; turns++) {
      for (let j = 0; j < 12; j++) {
        for (let i = 0; i<5; i++) {
          // firstTurn
          if (turns === 0) {
            let boardCopy = JSON.parse(JSON.stringify(board));
            if (boardCopy[j][i] !== boardCopy[j][i+1]) {
              let temp = boardCopy[j][i];
              boardCopy[j][i] = boardCopy[j][i+1];
              boardCopy[j][i+1] = temp;
              options.push(
                {
                  previousBoard: board,
                  currentBoard: boardCopy,
                  moveMade: {row: j, column: i},
                  previousTurns: []
                }
              );
            }
          } else {
            options.forEach(option => {
              let boardCopy = JSON.parse(JSON.stringify(option.currentBoard));
              if (boardCopy[j][i] !== boardCopy[j][i+1]) {
                let temp = boardCopy[j][i];
                boardCopy[j][i] = boardCopy[j][i+1];
                boardCopy[j][i+1] = temp;
                newOptions.push(
                  {
                    previousTurns: option.previousTurns.concat(option),
                    previousBoard: option.currentBoard,
                    currentBoard: boardCopy,
                    moveMade: {row: j, column: i}
                  }
                );
              }
            })
          }
        }
      }

      if (newOptions.length) {
        options = newOptions;
        newOptions = [];
      }

      for (let op = 0; op < options.length; op++) {
        let keepGoing = true;
        while (keepGoing) {
          let wasAMatch = checkForMatches(options, op);
          let blockFell = makeBlocksFall(options, op);
          keepGoing = wasAMatch || blockFell;
        }
      }
    }

    for (let allOptions = 0; allOptions < options.length; allOptions++) {
      if(checkIfSolved(options[allOptions].currentBoard)) {
        submitSolution(options[allOptions]);
        return;
      }
    }

    console.log('Failed to find solution');

  }

  return (
    <div className={cx('solve-toggle-container', 'cursor-pointer')} onClick={()=>solve()}>
      <span className={'solve-toggle'}>SOLVE</span>
    </div>
  )
}