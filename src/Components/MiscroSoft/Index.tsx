import BgPronto from "../BgPronto";
import OurClients from "../Common/OurClients";
import Pronto from "../Pronto";
import Cosa from "./Cosa";
import Hero from "./Hero";
import Vantaggi from "./Vantaggi";
import Vedio from "./Vedio";

const Index = () => {
  return (
    <div>
      <Hero />
      <OurClients />
      <Cosa />
      <Vedio />
      <Vantaggi />
      <BgPronto />
    </div>
  );
};

export default Index;
