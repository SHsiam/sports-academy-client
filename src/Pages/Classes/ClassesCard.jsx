import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const ClassesCard = ({ classed }) => {
    const { name, image, classname, seats, price,_id } = classed;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = classed => {
        console.log(classed);
        if(user && user.email){
            const classItem = {itemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Baseball" /></figure>
                <div className="card-body bg-sky-50 text-sky-950">
                    <h2 className="card-title">Name: {classname}</h2>
                    <h3 className="card-title">Instructor name: {name}</h3>
                    <h5 className="card-title">Available seats: {seats}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <button onClick={() => handleAddToCart(classed)} className="btn btn-info">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;