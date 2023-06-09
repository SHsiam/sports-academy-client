

const InstructorCard = ({instructor}) => {
    const{email,name,image}=instructor;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Baseball" /></figure>
        <div className="card-body bg-sky-50 text-sky-950">
            <h2 className="card-title">{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
};

export default InstructorCard;