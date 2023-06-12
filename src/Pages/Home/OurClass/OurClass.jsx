import { useQuery } from '@tanstack/react-query'
import OurClassCard from './OurClassCard'
import { Slide } from 'react-awesome-reveal';

const OurClass = () => {
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
            <h2 className='text-center text-xl font-bold text-sky-950'>Our Classes</h2>
            <div className="grid sm:grid-cols-3 gap-4 my-4 mx-2">
            {
                    classes.map(classed=><OurClassCard
                    key={classed._id}
                    classed={classed}
                    ></OurClassCard>)
                }
            </div>
        </div>
        </Slide>
    );
};

export default OurClass;