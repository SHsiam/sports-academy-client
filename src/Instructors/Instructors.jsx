import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./instructorCard";


const Instructors = () => {
    const {data: instructors = []} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
        
    })
    
    return (
        <div>
              <div className="grid sm:grid-cols-2 gap-8 my-4 mx-2">
                {
                    instructors.map(instructor=><InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorCard>)
                }
                </div>
        </div>
    );
};

export default Instructors;