import cx from 'classnames';
import * as React from "react";
import {AppContext} from "./AppContext";

export function BackgroundToggle() {

  const {toggleBackground} = React.useContext(AppContext);

  return (
    <div className={cx('background-toggle-container', 'cursor-pointer')} onClick={()=>toggleBackground()}>
      <span className={'change-background-toggle'}>CHANGE BACKGROUND</span>
    </div>
  )
}