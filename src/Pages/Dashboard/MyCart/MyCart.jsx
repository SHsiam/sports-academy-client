import { Link } from "react-router-dom";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";
import { Slide } from "react-awesome-reveal";


const MyCart = () => {
    const [items,refetch] = useClass();
    // console.log(items);
    const total = items.reduce((sum, item) => item.price + sum, 0);

    const handleDelete=item=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-academy-server-theta.vercel.app/items/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <Slide>
        <div className="w-full h-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl text-sky-600">Total Items: {items.length}</h3>
                <h3 className="text-3xl text-sky-600">Total Price: ${total}</h3>
                <Link to='/dashboard/payment' >
                    <button className="btn text-white bg-sky-600">PAYMENT</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-sky-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </Slide>
    );
};

export default MyCart;