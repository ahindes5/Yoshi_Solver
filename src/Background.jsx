import * as React from "react";
import {AppContext} from "./AppContext";
import cx from 'classnames';
import {CountBoard} from "./CountBoard";

export function Background(props) {

  const {background} = React.useContext(AppContext);

  return (
      <div className={'background-background'}>
        <div className={cx(background, 'normal-background')}>
          {props.children}
        </div>
        <CountBoard/>
      </div>
  )
}