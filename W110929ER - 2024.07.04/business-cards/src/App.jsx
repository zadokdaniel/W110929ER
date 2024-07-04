// import React from "react";
// import { Fragment } from "react";

import "./App.css";
import BusinessCard from "./components/businessCard";

function App() {
  return (
    // <React.Fragment>
    //   <BusinessCard />
    //   <BusinessCard />
    // </React.Fragment>

    // <Fragment>
    //   <BusinessCard />
    //   <BusinessCard />
    // </Fragment>

    <>
      <BusinessCard
        name="intel"
        description="the best chips"
        logoUrl="https://banner2.cleanpng.com/20180625/iax/kisspng-intel-logo-fujitsu-business-technology-5b30ff6108f022.6627458315299377610366.jpg"
        email="support@intel.com"
        website="http://intel.com"
      />
      <BusinessCard
        name="intel"
        description="the best chips"
        logoUrl="https://banner2.cleanpng.com/20180625/iax/kisspng-intel-logo-fujitsu-business-technology-5b30ff6108f022.6627458315299377610366.jpg"
        phone="97252848488"
        email="support@intel.com"
        website="http://intel.com"
      />
      <BusinessCard
        name="intel"
        description="the best chips"
        logoUrl="https://banner2.cleanpng.com/20180625/iax/kisspng-intel-logo-fujitsu-business-technology-5b30ff6108f022.6627458315299377610366.jpg"
        phone="97252848488"
        email="support@intel.com"
        website="http://intel.com"
      />
    </>
  );
}

export default App;
