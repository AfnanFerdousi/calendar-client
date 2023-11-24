
import {
    format,
    parseISO,
    parse
} from 'date-fns';
import { TfiNotepad } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import AddEventForm from './AddEventForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/actions/eventsActions';
import Loader from './Shared/Loader';
import { useParams } from 'react-router-dom'; 

const DayEvents = () => {
    const { date } = useParams(); 
    const selectedDate = parseISO(date); 
    const [showNewEventForm, setShowNewEventForm] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null); 
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const handleNewEventClick = () => {
        setShowNewEventForm(true);
    };

    // getting all the events
    const allEvents = useSelector(state => state.events.events);

    // checking if there is any event in the selected date
    const eventsForSelectedDate = allEvents.filter(event =>
        format(parseISO(event?.dateOfEvent), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    );

    const handleDeleteClick = (eventId) => {
        setLoader(true)
        dispatch(deleteEvent(eventId));
        setLoader(false)
    };
    console.log(allEvents)
    console.log(showNewEventForm)
    return (
        <div className="bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6 px-4">
            <p className='font-poppins text-lg px-2 mb-3 inline-block border-b-2 border-[#ddd]'>My Events</p>
            <h3 className="font-caveat text-5xl">{format(selectedDate, 'dd MMMM yyyy')} ✨</h3>

            <div>
                {/* events start */}
                {loader ? <Loader /> : eventsForSelectedDate.length > 0 ? eventsForSelectedDate.map((event, index) => (
                <div key={index} className='border-[2px] border-[#ddd] mt-6 rounded-lg'>
                    <div className='p-4'>
                        <div className=' flex items-center gap-x-8'>
                                <h3 className='text-2xl font-poppins flex items-center gap-x-4'><TfiNotepad className=' text-3xl' /> {event.title}</h3>
                                {/* showing the event time in a fomatted way */}
                                <h3 className='text-xl font-caveat  flex items-center'><IoMdTime className='font-semibold text-2xl' />{format(parse(event?.time, 'HH:mm', new Date()), 'h:mm a')}</h3>
                        </div>
                            <div className=''>
                                {/* showing the created at time in a formatted way */}
                                <h4 className='text-md text-gray-500 font-poppins mt-2'>created at: {format(parseISO(event?.createdAt), 'dd MMM yyyy, h:mm a')}</h4>
                                {/* showing the description if it exists */}
                                {event?.description && <h2 className='mt-4 text-md font-poppins text-lg text-primary'>{event?.description}</h2>}

                                {/* actions */}
                            <div className='flex items-center justify-end gap-x-4'>
                                <button className='text-4xl text-yellow-600'><CiEdit /></button>
                                <button className='text-4xl text-red-600' onClick={() => handleDeleteClick(event.id)}><MdDeleteOutline /></button>
                            </div>
                        </div>
                    </div>
                    </div>
                )) : <div className='text-2xl font-poppins flex items-center gap-x-4 my-6'>
                    <TfiNotepad className=' text-3xl' />
                    <p>No events found</p>
                </div>}
                {/* events end */}

                {/* add new event */}
                {showNewEventForm && <AddEventForm setShowNewEventForm={setShowNewEventForm} selectedDate={selectedDate}/>}

                <div>
                    <button
                        onClick={handleNewEventClick}
                        className='flex items-center font-medium text-xl text-primary gap-x-2 mt-2'><IoAdd /> New event</button>
                </div>

            </div>
        </div>
    );
};

export default DayEvents;