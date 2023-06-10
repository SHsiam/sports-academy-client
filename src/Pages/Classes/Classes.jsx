import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";


const Classes = () => {
    const {data: classes = []} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-8 my-4 mx-2">
                {
                    classes.map(classed=><ClassesCard
                    key={classed._id}
                    classed={classed}
                    ></ClassesCard>)
                }
                </div>
        </div>
    );
};

export default Classes;