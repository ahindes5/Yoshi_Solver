import * as React from "react";
import {AppContext} from "./AppContext";
import cx from 'classnames';
import {CountBoard} from "./CountBoard";
import {BackgroundToggle} from "./Toggles/BackgroundToggle";
import {Reset} from "./Toggles/Reset";
import "./backgrounds/Backgrounds.css"

export function Background(props) {

  const {background} = React.useContext(AppContext);

  return (
      <div className={'background-background'}>
        <BackgroundToggle/>
        <div className={cx(background, 'normal-background')}>
          {props.children}
        </div>
        <Reset/>
        <CountBoard/>
      </div>
  )
}