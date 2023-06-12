const MyClassesCard = ({item}) => {
    const{image,classname,name,seats,price,}=item;
    return (
        <div>
             <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Baseball" /></figure>
                <div className="card-body bg-sky-50 text-sky-950">
                    <h2 className="card-title">Name: {classname}</h2>
                    <h3 className="card-title">Instructor name: {name}</h3>
                    <h5 className="card-title">Available seats: {seats}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <div className="grid sm:grid-cols-3 gap-8 my-4 mx-2">
                        <button className="btn btn-success">Approve</button>
                        <button className="btn btn-warning">Deny</button>
                        <button className="btn btn-error">Pending</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassesCard;