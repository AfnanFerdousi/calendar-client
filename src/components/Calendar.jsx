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
} from 'date-fns';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(startOfMonth(new Date()));

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const startOfCalendar = startOfWeek(startOfMonth(currentDate));
    const endOfCalendar = endOfWeek(addMonths(startOfCalendar, 5)); // Displaying 6 weeks

    const daysInCalendar = eachDayOfInterval({ start: startOfCalendar, end: endOfCalendar });

    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayIndex = getDay(startOfCalendar);
    return (
        <div className='bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6'>
            <div className='flex justify-center items-center gap-x-6'>
                <button onClick={prevMonth} className='text-3xl'><IoIosArrowDropleftCircle /></button>
                <span className="font-caveat text-5xl">{format(currentDate, 'MMMM yyyy')}</span>
                <button onClick={nextMonth} className='text-3xl'><IoIosArrowDroprightCircle /></button>
            </div>

            <table className='w-full mt-10'>
                <thead>
                    <tr>
                        {daysOfTheWeek.map((day) => (
                            <th key={day} className='text-center text-lg'>{day}</th>
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
                                        className={`text-center py-4 rounded-lg cursor-pointer  ${isSameMonth(date, currentDate) ? 'text-primary hover:text-accent hover:text-semibold' : 'text-gray-400'
                                            } ${isToday(date) ? 'bg-secondary font-semibold hover:text-primary' : ''}`}
                                    >
                                        <Link to={`/day/${format(currentDate, 'yyyy-MM-dd')}`}>  {index >= firstDayIndex && index < firstDayIndex + daysInCalendar.length
                                            ? format(date, 'd')
                                            : ''}</Link>
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
