import Layout from "../Layout/Index";
import Header from "./Header";
import Cards from "./Cards";
import RequestDemoForm from "../Home/RequestDemoForm";

const Index = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Cards />
        <RequestDemoForm />
      </Layout>
    </div>
  );
};

export default Index;
