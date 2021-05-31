import * as React from 'react';

export const AppContext = React.createContext(null);

export function AppContextProvider({children}) {

  const [board, setBoard] = React.useState([[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]);
  const [numberOfTurns, setNumberOfTurns] = React.useState(0);
  const [backgroundIdx, setBackgroundIdx] = React.useState(0);
  const [background, setBackground] = React.useState('yoshi-background');
  const backgrounds = ['yoshi-background', 'blarg-background', 'froggy-background', 'lakitu-background', 'poochy-background', 'raven-background'];

  const reset = () => {
    setBoard([[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]);
    setNumberOfTurns(0);
  }

  const toggleBackground = () => {
    let newBackgroundIdx = (backgroundIdx + 1)%6;
    setBackgroundIdx(newBackgroundIdx);
    setBackground(backgrounds[newBackgroundIdx]);
  }

  const incrementCount = () => {
    if (numberOfTurns != 99) {
      setNumberOfTurns(numberOfTurns+1);
    }
  }

  const decrementCount = () => {
    if (numberOfTurns != 0) {
      setNumberOfTurns(numberOfTurns-1);
    }
  }

  const changeBoard = (x,y,value) => {
    let newBoard = [...board];
    newBoard[x][y] = value;
    setBoard(newBoard)
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
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
