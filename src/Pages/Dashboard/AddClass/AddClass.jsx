import { Slide } from "react-awesome-reveal";


const AddClass = () => {

    const handleAddClass=event=>{
        event.preventDefault();

        const form = event.target;
        const classname = form.classname.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const seats = form.seats.value;
        const photo = form.photo.value;
       
        const addClass={
            classname:classname,
            name:name,
            email:email,
            price:price,
            seats:seats,
            image:photo,
            
        }

        console.log(addClass);

        fetch('https://sports-academy-server-theta.vercel.app/class/', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(addClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Class Added')
            }
        })
    }
    return (
        <Slide>
        <div>
       
        <form onSubmit={handleAddClass} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name="classname" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email"  placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="number" name="seats" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add Class" />
            </div>
        </form>
    </div>
    </Slide>
    );
};

export default AddClass;