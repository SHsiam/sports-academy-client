
import { Helmet } from "react-helmet-async";
import ExtraSection from "../ExtraSection/ExtraSection";
import OurClass from "../OurClass/OurClass";
import OurInstructors from "../OurInstructors/OurInstructors";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        
        <div>
              <Helmet>
                <title>Sports Academy | Home</title>
            </Helmet>
            <Slider></Slider>
            <OurClass></OurClass>
            <OurInstructors></OurInstructors>
            <ExtraSection></ExtraSection>
           
        </div>
        
    );
};

export default Home;