import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from '../../../assets/banner/banner-1.jpg'
import banner2 from '../../../assets/banner/banner-2.jpg'
import banner3 from '../../../assets/banner/banner-3.jpg'
import banner4 from '../../../assets/banner/banner-4.jpg'
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
        <>
             <Carousel >
                <div>
                    <img src={banner1} />
                    <h2 className="legend ">Flying Shuttlecocks and Lightning Reflexes: The Art of Badminton</h2>
                </div>
                <div>
                    <img src={banner2} />
                    <h2 className="legend ">Spiking and Setting: The High-Energy World of Volleyball</h2>
                </div>
                <div>
                    <img src={banner3} />
                    <h2 className="legend">The Beautiful Game: Exploring the World of Football</h2>
                    <p></p>
                </div>
                <div>
                    <img src={banner4} />
                    <h2 className="legend">Fast-Paced and Action-Packed: The World of Handball</h2>
                </div>
            </Carousel>
        </>
    );
};

export default Slider;