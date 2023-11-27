import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    format,
    addMonths,
    subMonths,
    startOfWeek,
    startOfMonth,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isToday,
    getDay,
    isSameDay,
    parseISO,
} from 'date-fns';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector } from 'react-redux';

const Calendar = () => {
    const events = useSelector(state => state.events.events);
    const [currentDate, setCurrentDate] = useState(startOfMonth(new Date()));

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const startOfCalendar = startOfWeek(startOfMonth(currentDate));
    const endOfCalendar = endOfWeek(addMonths(startOfCalendar, 5)); 

    const daysInCalendar = eachDayOfInterval({ start: startOfCalendar, end: endOfCalendar });

    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayIndex = getDay(startOfCalendar);

    // to show the events on the calendar
    const getEventsForDay = (day) => {
        return events.filter((event) => isSameDay(parseISO(event.dateOfEvent), day));
    };


    return (
        <div className='bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6'>
            {/* month navigation start */}
            <div className='flex justify-center items-center gap-x-6'>
                <button onClick={prevMonth} className='lg:md:text-3xl text-2xl'><IoIosArrowDropleftCircle /></button>
                <span className="font-caveat lg:text-5xl md:text-4xl text-3xl">{format(currentDate, 'MMMM yyyy')}</span>
                <button onClick={nextMonth} className='lg:md:text-3xl text-2xl'><IoIosArrowDroprightCircle /></button>
            </div>
            {/* month navigation end */}

            <table className='w-full mt-10 font-poppins'>
                {/* showing days of the week */}
                <thead>
                    <tr>
                        {daysOfTheWeek.map((day) => (
                            <th key={day} className='text-center lg:md:text-lg text-md'>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, weekIndex) => (
                        <tr key={weekIndex}>
                            {daysOfTheWeek.map((_, dayIndex) => {
                                const index = weekIndex * 7 + dayIndex;
                                const date = daysInCalendar[index];
                                return (
                                    <td
                                        key={date.toString()}
                                        className={`lg:w-[150px] md:w-[110px] w-[90px] text-center lg:md:py-4 py-2 rounded-lg cursor-pointer  ${isSameMonth(date, currentDate) ? 'text-primary hover:text-accent hover:text-semibold' : 'text-gray-400'
                                            } ${isToday(date) ? 'bg-secondary font-semibold hover:text-primary' : ''}`}
                                    >
                                        <Link to={`/day/${format(date, 'yyyy-MM-dd')}`}>
                                            <h2 className='lg:md:text-[14px] text-sm'>{index >= firstDayIndex && index < firstDayIndex + daysInCalendar.length
                                                ? format(date, 'd')
                                                : ''}</h2>
                                                {getEventsForDay(date).map((event, index) => (
                                                    <h2 key={index} className="lg:text-[12px] md:text-[10px] text-[8px]  bg-[#c7a6c426] rounded-lg mt-[2px]">{event.title}</h2>
                                                ))}
                                        </Link>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
