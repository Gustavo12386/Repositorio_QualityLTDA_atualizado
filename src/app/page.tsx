import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Especialization from "./components/especialization";
import Acting from "./components/acting";

export default function Home() {
  return (
    <>  
      <Navbar />
      <Introduction/>
      <Especialization/>
      <Acting/>
    </>  
  );
}