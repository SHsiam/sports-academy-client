

const ClassesCard = ({ classed }) => {
    const { name, image, classname, seats, price } = classed
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Baseball" /></figure>
                <div className="card-body bg-sky-50 text-sky-950">
                    <h2 className="card-title">Name: {classname}</h2>
                    <h3 className="card-title">Instructor name: {name}</h3>
                    <h5 className="card-title">Available seats: {seats}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <button className="btn btn-info">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;