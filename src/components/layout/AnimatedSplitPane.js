import React from "react";

import ObserverAnimation from "./ObserverAnimation";
import Border from "./Border";

const AnimatedSplitPane = ({
  leftContent,
  rightContent,
  leftAnimationClass,
  rightAnimationClass,
  borderAnimationClass,
  customClass,
}) => {
  return (
    <div className={`animated-split-pane ${customClass ? customClass : ""}`}>
      <ObserverAnimation
        animation={leftAnimationClass}
        customClasses="split-pane-content"
      >
        {leftContent}
      </ObserverAnimation>
      <ObserverAnimation animation={borderAnimationClass}>
        <Border />
      </ObserverAnimation>
      <ObserverAnimation
        animation={rightAnimationClass}
        customClasses="split-pane-content"
      >
        {rightContent}
      </ObserverAnimation>
    </div>
  );
};

export default AnimatedSplitPane;
