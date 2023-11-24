import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from './Shared/Loader';
const HistoricalEvent = () => {
    const date = new Date();
    const month = date.getMonth();
    const currentDate = date.getDate();
    const [events, setEvents] = useState([]);
    const [loader, setLoader] = useState(true);
   useEffect(() => {
       const getHistoricalEvent = async () => {
           setLoader(true);
           try {
               const data = await axios.get(`https://history.muffinlabs.com/date/${month}/${currentDate}`);
              if(data?.status === 200) {
                  setEvents(data?.data?.data?.Events);
                  setLoader(false)
              }
           } catch (error) {
               console.log(error);
               setLoader(false)
           }
       }
       getHistoricalEvent();
   }, [currentDate, month]);

    return (
        <div className='border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] mt-8 py-6 px-4 h-[70vh] overflow-scroll overflow-x-hidden'>
            <h2 className='lg:text-3xl md:text-2xl text-2xl font-caveat font-semibold'>What happened today 😶‍🌫️?</h2>

            <div>
                {loader ? <Loader /> : events.slice(0, 5).map((event, index) => (
                    <div key={index} className='mt-6 border-b-2 pb-6'>
                        <div className='flex flex-col items-center font-poppins'>
                            <h3 className='bg-accent text-bg rounded-full lg:p-6 md:p-4 p-4 lg:w-20 w-16 lg:text-2xl md:text-xl text-xl flex justify-center items-center'><span>{event?.year}</span></h3>
                            <p className='text-center text-lg font-semibold mt-2'>Year of event</p>
                        <h3 className='md:text-md text-[14px] font-medium text-center mt-4'>{event?.text}</h3>
                      </div>
                    </div>                    
                ))}
            </div>
        </div>
    );
};

export default HistoricalEvent;