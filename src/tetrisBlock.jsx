import * as React from "react";
import {AppContext} from "./AppContext";
import cx from "classnames";

export function TetrisBlock(props) {

  const {columnIdx, rowIdx} = props;
  const {board, changeBoard} = React.useContext(AppContext);

  const incrementBlock = () => {
    changeBoard(rowIdx, columnIdx, (board[rowIdx][columnIdx] + 1)%7);
  }

  const findColor = (value) => {
    switch (value) {
      case 0:
        return  'block';
      case 1:
        return 'green-block';
      case 2:
        return 'purple-block';
      case 3:
        return 'red-block';
      case 4:
        return 'yellow-block';
      case 5:
        return 'light-blue-block';
      case 6:
        return 'blue-block'
      default:
        return 'block';
    }

  }

  return (
    <div className={cx(findColor(board[rowIdx][columnIdx]), 'cursor-pointer')} onClick={()=>incrementBlock()}>
      {`${rowIdx} ${columnIdx}`}
    </div>
  )

}