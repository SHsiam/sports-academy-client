import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./instructorCard";
import { Helmet } from "react-helmet-async";
import { Rotate } from "react-awesome-reveal";


const Instructors = () => {
    const {data: instructors = []} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://sports-academy-server-theta.vercel.app/instructors');
            return res.json();
        }
        
    })
    
    return (
        <Rotate>
        <div>
               <Helmet>
                <title>Sports Academy | Instructor</title>
            </Helmet>
              <div className="grid sm:grid-cols-2 gap-8 my-4 mx-6">
                {
                    instructors.map(instructor=><InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorCard>)
                }
                </div>
        </div>
        </Rotate>
    );
};

export default Instructors;