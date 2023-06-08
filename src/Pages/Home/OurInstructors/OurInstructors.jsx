import football from '../../../assets/coach/Football.jpg'
import badminton from '../../../assets/coach/Badminton.jpg'
import basketball from '../../../assets/coach/Basketball.jpg'
import cricket from '../../../assets/coach/Cricket.jpg'
import golf from '../../../assets/coach/Golf.jpg'
import Baseball from '../../../assets/coach/Baseball.jpg'

const OurInstructors = () => {
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-sky-950'>Our Instructors</h2>
            <div className="grid sm:grid-cols-3 gap-2 my-4 mx-2">
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={football} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ethan</h2>
                        <p>Ethan is a skilled and experienced football coach. With his deep knowledge of the game and exceptional coaching techniques, he has mentored and guided teams to victory. Ethans ability to strategize, motivate players, and instill a strong team spirit makes him a respected and admired football coach.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={badminton} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Benjamin</h2>
                        <p>Benjamin is a seasoned badminton coach. With his technical expertise and keen eye for detail, he has honed the skills of many aspiring badminton players. Benjamins dedication to training, focus on technique, and ability to inspire his athletes make him a highly sought-after badminton coach.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={basketball} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Alexander</h2>
                        <p>Alexander is a passionate and dedicated basketball coach. Known for his dynamic coaching style and emphasis on teamwork, he has guided numerous teams to success on the basketball court. Alexanders ability to develop player skills, foster a competitive spirit, and create effective game strategies makes him an influential basketball coach.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={cricket} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">William</h2>
                        <p>William is a respected cricket coach with a wealth of knowledge about the game. His ability to analyze the complexities of cricket, combined with his strong leadership skills, has led to the development of exceptional cricket teams. Williams focus on technique, tactical approach, and nurturing talent make him a highly regarded cricket coach.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={golf} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Olivia</h2>
                        <p>Olivia is a skilled golf coach with a passion for the game. With her patient and encouraging teaching style, she has helped aspiring golfers improve their skills and reach their full potential. Olivias expertise in swing mechanics, course management, and mental preparation makes her an invaluable golf coach.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-sky-100 text-sky-950 shadow-xl">
                    <figure><img src={Baseball} alt="instructors" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">James</h2>
                        <p>James is a knowledgeable baseball coach who excels at teaching the fundamentals of the game. His emphasis on technique, strategy, and teamwork has led to the success of numerous baseball teams under his guidance. Jamess ability to inspire players, develop their skills, and instill a love for the sport makes him a respected baseball coach.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInstructors;