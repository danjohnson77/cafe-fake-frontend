import React, { Fragment } from "react";
import { useQuery } from "react-apollo";
import { ABOUT_QUERY } from "../../../queries/about";
import AnimatedSplitPane from "../../layout/AnimatedSplitPane";

import FixedImgBg from "../../layout/FixedImgBg";
import Spinner from "../../layout/Spinner";

const About = () => {
  const { loading, error, data } = useQuery(ABOUT_QUERY);
  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const {
    heading,
    description,
    background: { url },
  } = data.about.info;

  const imageUrl = `${url}`;

  const right = <p className="page-text">{description}</p>;
  const left = <img src={imageUrl} alt="" />;

  return (
    <Fragment>
      <FixedImgBg imageUrl={url} />
      <div className="about">
        <div className="about-header">
          <h1 className="page-heading">{heading}</h1>
        </div>
        <AnimatedSplitPane
          leftContent={left}
          rightContent={right}
          leftAnimationClass="fade-x-left"
          rightAnimationClass="fade-x-right"
          borderAnimationClass="border"
          customClass="about-pane horizontal"
        />
      </div>
    </Fragment>
  );
};

export default About;
