import React, { Fragment } from "react";

import { Query } from "react-apollo";
import { LANDING_QUERY } from "../../../queries/landing";
import Spinner from "../../layout/Spinner";

import DetailsContent from "./content/DetailsContent";
import LocationContent from "./content/LocationContent";
import TopContent from "./content/TopContent";

import LandingSection from "./LandingSection";

const Landing = () => {
  return (
    <Query query={LANDING_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) console.log(error);

        const {
          landing: { top, location, details },
        } = data;

        return (
          <Fragment>
            <LandingSection bgImg={`${top.background.url}`}>
              <TopContent content={top} />
            </LandingSection>

            <LandingSection bgImg={`${location.background.url}`}>
              <LocationContent content={location} />
            </LandingSection>

            <LandingSection bgImg={`${details.background.url}`}>
              <DetailsContent content={details} />
            </LandingSection>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default Landing;
