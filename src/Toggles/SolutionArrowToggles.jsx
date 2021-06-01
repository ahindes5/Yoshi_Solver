import * as React from "react";
import {AppContext} from "../AppContext";
import cx from "classnames";

export function SolutionArrowToggles() {
  const {incrementSolutionIdx, decrementSolutionIdx} = React.useContext(AppContext);

  return (
    <div className={'solution-arrows-toggle-container'}>
      <div className={cx('solution-arrow-toggle-container', 'cursor-pointer')} onClick={()=>decrementSolutionIdx()}>
        <div className={'left-arrow'}>➤</div>
      </div>
      <div className={cx('solution-arrow-toggle-container', 'cursor-pointer')} onClick={()=>incrementSolutionIdx()}>
        <div className={'right-arrow'}>➤</div>
      </div>
    </div>

  )
}

