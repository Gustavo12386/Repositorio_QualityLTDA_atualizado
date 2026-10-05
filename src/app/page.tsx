import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Especialization from "./components/especialization";
import Acting from "./components/acting";
import Portfolio from "./components/portfolio";
import Clients from "./components/clients";
import TrabalheConosco from "./components/trabalheconosco";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>  
      <Navbar />
      <Introduction/>
      <Especialization/>
      <Acting/>
      <Portfolio />
      <Clients/>
      <TrabalheConosco/>
      <Footer/>
    </>  
  );
}