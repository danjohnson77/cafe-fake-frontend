import React from "react";
import { Link } from "react-router-dom";

import MovingBorder from "../../../layout/MovingBorder";
import ObserverAnimation from "../../../layout/ObserverAnimation";
import Button from "../../../ui/Button";

const DetailsContent = ({ content }) => {
  const { heading, description } = content;
  return (
    <div className="details">
      <ObserverAnimation animation="fade-y-down">
        <h1 className="page-heading">{heading}</h1>
      </ObserverAnimation>
      <MovingBorder />
      <ObserverAnimation animation="fade-in">
        <p className="page-text">{description}</p>
      </ObserverAnimation>
      <MovingBorder />
      <ObserverAnimation animation="fade-y-up">
        <Link to={"/about"}>
          <Button>READ OUR STORY</Button>
        </Link>
      </ObserverAnimation>
    </div>
  );
};

export default DetailsContent;
