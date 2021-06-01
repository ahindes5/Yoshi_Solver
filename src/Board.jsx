import {AppContext} from "./AppContext";
import * as React from 'react';
import {TetrisBlock} from "./tetrisBlock";

export function Board (props) {

  const {board, solution, solutionIdx, numberOfTurns} = React.useContext(AppContext);
  const [highlightLeftRow, setHighlightLeftRow] = React.useState(null);
  const [highlightRightRow, setHighlightRightRow] = React.useState(null);
  const [highlightLeftColumn, setHighlightLeftColumn] = React.useState(null);
  const [highlightRightColumn, setHighlightRightColumn] = React.useState(null);

  React.useEffect(() => {
    if (solution) {
      if (solutionIdx === numberOfTurns -1) {
        setHighlightLeftRow(solution.moveMade.row);
        setHighlightLeftColumn(solution.moveMade.column);
        setHighlightRightRow(solution.moveMade.row);
        setHighlightRightColumn(solution.moveMade.column +1);
      } else {
        setHighlightLeftRow(solution.previousTurns[solutionIdx].moveMade.row);
        setHighlightLeftColumn(solution.previousTurns[solutionIdx].moveMade.column);
        setHighlightRightRow(solution.previousTurns[solutionIdx].moveMade.row);
        setHighlightRightColumn(solution.previousTurns[solutionIdx].moveMade.column +1);
      }
    } else {
      setHighlightLeftRow(null);
      setHighlightLeftColumn(null);
      setHighlightRightColumn(null);
      setHighlightLeftColumn(null);
    }
  }, [solution, solutionIdx]);

  return <div>
    <div className={'gridContainer'}>
      <div className={'mainGrid'}>
        {board.map((row, rowIdx) => (
          row.map((square, columnIdx) => (
            <TetrisBlock
              key={`${columnIdx},${rowIdx}`}
              columnIdx={columnIdx}
              rowIdx={rowIdx}
              value={square}
              highlightLeft={highlightLeftRow === rowIdx && highlightLeftColumn === columnIdx}
              highlightRight={highlightRightRow === rowIdx && highlightRightColumn === columnIdx}
            />
          ))
        ))}
      </div>
    </div>
  </div>
}