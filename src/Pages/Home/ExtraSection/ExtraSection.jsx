import extra1 from '../../../assets/extra/extra-1.jpg';
import extra2 from '../../../assets/extra/extra-2.jpg';
import extra3 from '../../../assets/extra/extra-3.jpg';
import extra4 from '../../../assets/extra/extra-4.jpg';
import extra5 from '../../../assets/extra/extra-5.jpg';
import extra6 from '../../../assets/extra/extra-6.jpg';

const ExtraSection = () => {
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-sky-950'>Facilities Sports Academy</h2>
        <div className="grid sm:grid-cols-3 gap-2 my-4 mx-2">
  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra1} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">OUTDOOR PITCHES</h2>
  </div>
</div>
  </div>
  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra2} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">MEDICAL CENTER</h2>
  </div>
</div>
  </div>
  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra3} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">THE GYM</h2>
  </div>
</div>
  </div>

  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra4} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">PROFESSIONAL COACH</h2>
  </div>
</div>
  </div>
  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra5} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">HEALTHY FOOD CANTEEN</h2>
  </div>
</div>
  </div>
  <div>
  <div className="card w-96 bg-sky-600 shadow-xl image-full">
  <figure><img src={extra6} alt="extra1" /></figure>
  <div className="card-body">
    <h2 className="card-title">SWIMMING COMPLEX</h2>
  </div>
</div>
  </div>
</div>


  
</div>

    );
};

export default ExtraSection;