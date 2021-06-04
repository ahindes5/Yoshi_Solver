import * as React from 'react';

export const AppContext = React.createContext(null);

export function AppContextProvider({children}) {

  const [board, setBoard] = React.useState([[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]);
  const [numberOfTurns, setNumberOfTurns] = React.useState(1);
  const [numberOfTurnsForSolve, setNumberOfTurnsForSolve] = React.useState(1);
  const [backgroundIdx, setBackgroundIdx] = React.useState(0);
  const [background, setBackground] = React.useState('yoshi-background');
  const [solution, setSolution] = React.useState(null);
  const [solutionIdx, setSolutionIdx] = React.useState(0);
  const backgrounds = ['yoshi-background', 'lakitu-background', 'poochy-background', 'froggy-background', 'blarg-background', 'raven-background'];


  const reset = () => {
    setBoard([[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]);
    setNumberOfTurns(1);
    setSolution(null);
    setSolutionIdx(0);
  }

  const toggleBackground = () => {
    let newBackgroundIdx = (backgroundIdx + 1)%6;
    setBackgroundIdx(newBackgroundIdx);
    setBackground(backgrounds[newBackgroundIdx]);
  }

  const incrementCount = () => {
    if (numberOfTurns !== 99) {
      let newNumberOfTurns = numberOfTurns + 1;
      setNumberOfTurns(newNumberOfTurns);
      setNumberOfTurnsForSolve(newNumberOfTurns);
    }
  }

  const decrementCount = () => {
    if (numberOfTurns !== 1) {
      let newNumberOfTurns = numberOfTurns - 1;
      setNumberOfTurns(newNumberOfTurns);
      setNumberOfTurnsForSolve(newNumberOfTurns);
    }
  }

  const incrementSolutionIdx = () => {
    if (solutionIdx < numberOfTurns -1) {
      let newSolutionIdx = solutionIdx + 1;
      setNumberOfTurnsForSolve(numberOfTurnsForSolve -1);
      if (newSolutionIdx === numberOfTurns -1) {
        setBoard(solution.previousBoard);
      } else {
        setBoard(solution.previousTurns[newSolutionIdx].previousBoard);
      }
      setSolutionIdx(newSolutionIdx);
    }
  }

  const decrementSolutionIdx = () => {
    if (solutionIdx > 0) {
      let newSolutionIdx = solutionIdx - 1;
      setNumberOfTurnsForSolve(numberOfTurnsForSolve +1);
      if (newSolutionIdx === numberOfTurns -1) {
        setBoard(solution.previousBoard);
      } else {
        setBoard(solution.previousTurns[newSolutionIdx].previousBoard);
      }
      setSolutionIdx(newSolutionIdx);
    }
  }

  const changeBoard = (rowIdx, columnIdx, value) => {
    let newBoard = [...board];
    newBoard[rowIdx][columnIdx] = value;
    setBoard(newBoard)
  }

  const submitSolution = (solution) => {
    setSolution(solution)
  }

  return (
    <AppContext.Provider
      value={{
        board,
        changeBoard,
        toggleBackground,
        background,
        numberOfTurns,
        incrementCount,
        decrementCount,
        reset,
        submitSolution,
        solution,
        incrementSolutionIdx,
        decrementSolutionIdx,
        numberOfTurnsForSolve,
        solutionIdx
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
