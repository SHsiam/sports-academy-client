import class1 from '../../../assets/class/class-1.jpg'
import class2 from '../../../assets/class/class-2.jpg'
import class3 from '../../../assets/class/class-3.jpg'
import class4 from '../../../assets/class/class-4.jpg'
import class5 from '../../../assets/class/class-5.jpg'
import class6 from '../../../assets/class/class-6.jpg'

const OurClass = () => {
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-sky-950'>Our Classes</h2>
            <div className="grid sm:grid-cols-3 gap-2 my-4 mx-2">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class1} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Baseball</h2>
                        <p>Cracking the Bat: Unleashing the Thrills of Americas Favorite Game</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class2} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Golf</h2>
                        <p>From Fairway to Tee: Discovering the Beauty of Golf</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class3} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Basketball</h2>
                        <p>Dribble, Shoot, Score: The Thrilling World of Basketball</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class4} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Football</h2>
                        <p>From Goal to Goal: A Journey Through Footballs Thrills and Skills</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class5} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Badminton</h2>
                        <p>The Graceful Racket: Discovering the World of Badminton</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={class6} alt="Baseball" /></figure>
                    <div className="card-body bg-sky-50 text-sky-950">
                        <h2 className="card-title">Cricket</h2>
                        <p>Bat and Ball: Exploring the Strategy and Drama of Cricket</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClass;