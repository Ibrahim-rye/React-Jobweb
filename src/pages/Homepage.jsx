import React from "react";
import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import JobListing from "../components/JobListing";
import ViewAll from "../components/ViewAll";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListing isHome={true} />
      <ViewAll />
    </>
  );
};

export default Homepage;
