import * as React from "react";
import {AppContext} from "./AppContext";
import cx from 'classnames';
import {CountBoard} from "./CountBoard";
import {BackgroundToggle} from "./Toggles/BackgroundToggle";
import {ResetToggle} from "./Toggles/ResetToggle";
import "./backgrounds/Backgrounds.css"
import {SolveToggle} from "./Toggles/SolveToggle";

export function Background(props) {

  const {background} = React.useContext(AppContext);

  return (
      <div className={'background-background'}>
        <BackgroundToggle/>
        <div className={cx(background, 'normal-background')}>
          {props.children}
        </div>
        <ResetToggle/>
        <CountBoard/>
        <SolveToggle/>
      </div>
  )
}