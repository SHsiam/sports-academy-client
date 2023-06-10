import { useQuery } from '@tanstack/react-query'
import OurClassCard from './OurClassCard'

const OurClass = () => {
    const {data: classes = []} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-sky-950'>Our Classes</h2>
            <div className="grid sm:grid-cols-3 gap-2 my-4 mx-2">
            {
                    classes.map(classed=><OurClassCard
                    key={classed._id}
                    classed={classed}
                    ></OurClassCard>)
                }
            </div>
        </div>
    );
};

export default OurClass;