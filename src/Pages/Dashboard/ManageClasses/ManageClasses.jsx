
import { useQuery } from "@tanstack/react-query";
import ManageClassesCard from "./ManageClassesCard";
import { Slide } from "react-awesome-reveal";


const ManageClasses = () => {
    const {data: classes = []} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('https://sports-academy-server-theta.vercel.app/class');
            return res.json();
        }
    })
    return (
        <Slide>
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
        </Slide>
    );
};

export default ManageClasses;