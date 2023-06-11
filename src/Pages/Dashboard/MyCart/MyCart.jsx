import { Link } from "react-router-dom";
import useClass from "../../../hooks/useClass";
import { FaTrashAlt } from "react-icons/fa";


const MyCart = () => {
    const [items,] = useClass();
    // console.log(items);
    
    // how does reduce work!!!
    const total = items.reduce((sum, item) => item.price + sum, 0);

    const handleDelete=item=>{
        console.log(item);
    }
    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl text-sky-600">Total Items: {items.length}</h3>
                <h3 className="text-3xl text-sky-600">Total Price: ${total}</h3>
                <Link >
                    <button className="btn text-white bg-sky-600">PAYMENT</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
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
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
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
    );
};

export default MyCart;