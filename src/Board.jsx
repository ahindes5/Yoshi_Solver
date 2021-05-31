import {AppContext} from "./AppContext";
import * as React from 'react';
import {TetrisBlock} from "./tetrisBlock";

export function Board (props) {

  const {board} = React.useContext(AppContext);

  React.useEffect(() => {
    console.log(board)
  }, [board]);

  return <div>
    <div className={'gridContainer'}>
      <div className={'mainGrid'}>
        {board.map((row, idx) => (
          row.map((square, idy) => (
            <TetrisBlock
              key={`${idx},${idy}`}
              x={idx}
              y={idy}
              value={square}
            />
          ))
        ))}
      </div>
    </div>
  </div>
}