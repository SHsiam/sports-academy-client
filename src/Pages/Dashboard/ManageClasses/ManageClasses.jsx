
import { useQuery } from "@tanstack/react-query";
import ManageClassesCard from "./ManageClassesCard";


const ManageClasses = () => {
    const {data: classes = []} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return (
        <div>
            <h2 className="text-3xl text-center my-4">Manage Classes</h2>
            <div className="grid sm:grid-cols-2 gap-8 my-4 mx-2">
                {
                    classes.map(item=><ManageClassesCard
                    key={item._id}
                    item={item}
                    ></ManageClassesCard>)
                }
            

                </div>
        </div>
    );
};

export default ManageClasses;