import { Element } from "react-scroll";
import BgPronto from "../BgPronto";
import Appointment from "../Common/Appointment";
import CustomerReview from "../Common/CustomerReview";
import OurClients from "../Common/OurClients";
import Layout from "../Layout/Index";
import Futuro from "./Futuro";
import HeroMob from "./HeroMob";
import Speaking from "../NewComponents/Speaking";
import WhyUs from "../NewComponents/WhyUs";
import MainCom from "./MainCom";
import Hero from "../NewComponents/Hero"
import PercheCards from "./PercheCards";
import RequestDemoForm from "./RequestDemoForm";
import Vedio from "./Vedio";

const Index = () => {
  return (
    <Layout>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <Hero />
      <Speaking />
      <HeroMob />
      <OurClients />
      <WhyUs />
      <Futuro />
      <Vedio />
      <CustomerReview/>
      <Appointment />
      <BgPronto />
    </Layout>
  );
};

export default Index;
