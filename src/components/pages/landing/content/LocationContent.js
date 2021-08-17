import React from "react";

import Button from "../../../ui/Button";

import AnimatedSplitPane from "../../../layout/AnimatedSplitPane";

const LocationContent = ({ content }) => {
  const {
    address: { street, city, state, zip, phone },
    hours,
  } = content;

  const left = (
    <div className="address">
      <p>{street}</p>
      <p>{`${city}, ${state} ${zip}`}</p>
      <p>{phone}</p>
      <Button customClasses="btn-maps">OPEN IN GOOGLE MAPS</Button>
    </div>
  );

  const right = (
    <div className="hours">
      <ul>
        {hours.map((d, index) => {
          const { day, open, close } = d;
          return (
            <li key={index}>
              <p>{day}</p>
              <p>{`${open} - ${close}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="location page-subheading">
      <AnimatedSplitPane
        leftContent={left}
        rightContent={right}
        leftAnimationClass="fade-x-left"
        rightAnimationClass="fade-x-right"
        borderAnimationClass="border"
        customClass="location-pane horizontal"
      />
    </div>
  );
};

export default LocationContent;
