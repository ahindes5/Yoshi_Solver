import {AppContext} from "./AppContext";
import * as React from 'react';
import {TetrisBlock} from "./tetrisBlock";

export function Board (props) {

  const {board} = React.useContext(AppContext);

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
            />
          ))
        ))}
      </div>
    </div>
  </div>
}