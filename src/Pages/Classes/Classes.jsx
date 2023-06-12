import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";


const Classes = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('https://sports-academy-server-theta.vercel.app/class');
            return res.json();
        }
    })
    return (
        <Zoom>
        <div>
            <Helmet>
                <title>Sports Academy | Class</title>
            </Helmet>
            <div className="grid sm:grid-cols-2 gap-8 my-4 mx-2">
                {
                    classes.map(classed => <ClassesCard
                        key={classed._id}
                        classed={classed}
                    ></ClassesCard>)
                }
            </div>
        </div>
        </Zoom>
    );
};

export default Classes;