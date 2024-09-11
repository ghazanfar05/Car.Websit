import Image from "next/image";
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"
import Content from "./component/Content"
import File from "./component/File"
import Type from "./component/Type"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Line from "./component/Line"
import Data from "./component/Data"
import Footer from "./component/Footer"

function Home() {
  return (
    <div className="">

    
    
      <Navbar />
      <Slider />
      < Content />
      <File />
      <Type />
      <Header />
      <Hero />
      <Line />
      <Data />
      
      <Footer />
    </div>
  );
}
export default Home