import BgPronto from "../BgPronto";
import OurClients from "../Common/OurClients";
import Cosa from "./Cosa";
import Hero from "./Hero";
import ImgSec from "./ImgSec";
import Vantaggi from "./Vantaggi";
import Vedio from "./Vedio";

const Index = () => {
  return (
    <div>
      <Hero />
      <OurClients />
      <Cosa />
      <Vantaggi />
      <Vedio />
      <ImgSec />
      <BgPronto />
    </div>
  );
};

export default Index;
