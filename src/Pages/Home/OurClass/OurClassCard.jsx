

const OurClassCard = ({classed}) => {
    const {image, classname,title, } = classed
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Baseball" /></figure>
        <div className="card-body bg-sky-50 text-sky-950">
            <h2 className="card-title">{classname}</h2>
            <p>{title}</p>
        </div>
    </div>
    );
};

export default OurClassCard;