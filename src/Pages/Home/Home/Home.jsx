import ExtraSection from "../ExtraSection/ExtraSection";
import OurClass from "../OurClass/OurClass";
import OurInstructors from "../OurInstructors/OurInstructors";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OurClass></OurClass>
            <OurInstructors></OurInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;