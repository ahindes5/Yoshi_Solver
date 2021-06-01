import * as React from "react";
import {AppContext} from "./AppContext";
import cx from 'classnames';

export function CountBoard(props) {

  const {numberOfTurns, incrementCount, decrementCount} = React.useContext(AppContext);

  return (
    <div className={'count-container'}>
      <div className={'count'}>COUNT</div>
      <div className={'number-of-turns-container'}>
        <div className={'number-of-turns'}>{numberOfTurns < 10 ? '0' + numberOfTurns : numberOfTurns}</div>
        <div className={'arrow-container'}>
          <div style={{marginBottom: '12px'}} className={cx('cursor-pointer', 'arrow')} onClick={()=>incrementCount()}>▲</div>
          <div onClick={()=>decrementCount()} className={cx('cursor-pointer', 'arrow')}>▼</div>
        </div>
      </div>
    </div>
  )
}