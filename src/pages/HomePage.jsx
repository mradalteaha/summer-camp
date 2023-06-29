import React ,{useState} from "react";
import Heading from "../components/common/Heading";
import Footer from "../components/common/Footer";
import WelcomeComponent from "../components/WelcomeComponent";



function HomePage() {

    const [started , setStarted] = useState(false)
  
  
  
    return (
      <div> 
        <Heading />
       
        <WelcomeComponent/>
        
          
        <Footer />
      </div>
    );
  }
  
  export default HomePage;