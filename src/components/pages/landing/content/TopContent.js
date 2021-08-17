import React from "react";

import { Link } from "react-router-dom";

import ObserverAnimation from "../../../layout/ObserverAnimation";

import Button from "../../../ui/Button";

const TopContent = ({ content }) => {
  const { headline, button } = content;

  return (
    <div className="top-header">
      <ObserverAnimation animation="fade-y-down">
        <h1>{headline}</h1>
      </ObserverAnimation>

      <ObserverAnimation animation="fade-y-up">
        <Link to="/menu">
          <Button customClasses="cta">{button}</Button>
        </Link>
      </ObserverAnimation>
    </div>
  );
};

export default TopContent;
