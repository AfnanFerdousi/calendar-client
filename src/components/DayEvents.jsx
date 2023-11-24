
import {
    format,
    startOfMonth
} from 'date-fns';


const DayEvents = () => {
    const currentDate = startOfMonth(new Date());

    return (
        <div className="bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6 px-4">
            <p className='font-poppins text-lg px-2 mb-3 inline-block border-b-2 border-[#ddd]'>My Tasks</p>
            <h3 className="font-caveat text-5xl">{format(currentDate, 'dd MMMM yyyy')} ✨</h3>

            <div>
                
            </div>
        </div>
    );
};

export default DayEvents;