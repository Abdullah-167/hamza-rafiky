import React from "react";
import Hero from "./Hero";
import Unlock from "./Unlock";
import Speaking from "./Speaking";
import WhyUs from "./WhyUs";
import NewNavbar from "./NewNavbar";
import TabComponent from "./TabComponent";
import Footer from "../Layout/Footer";

const NewPage = () => {
  return (
    <section>
      <NewNavbar />
      <Hero />
      <Unlock />
      <Speaking />
      <WhyUs />
      <TabComponent />
      <Footer />
    </section>
  );
};

export default NewPage;
