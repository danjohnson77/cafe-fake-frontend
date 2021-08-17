import React from "react";

const LandingSection = ({ children, bgImg }) => {
  return (
    <section className="landing-section">
      <div
        className="landing-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {children}
    </section>
  );
};

export default LandingSection;
