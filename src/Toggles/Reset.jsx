import cx from 'classnames';
import * as React from "react";
import './Toggles.css';
import {AppContext} from "../AppContext";

export function Reset() {

  const {reset} = React.useContext(AppContext);

  return (
    <div className={cx('reset-toggle-container', 'cursor-pointer')} onClick={()=>reset()}>
      <span className={'reset-toggle'}>RESET</span>
    </div>
  )
}