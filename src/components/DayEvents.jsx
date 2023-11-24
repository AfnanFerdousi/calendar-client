
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
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const handleNewEventClick = () => {
        setShowNewEventForm(true);
    };
    const handleEditClick = (event) => {
        setShowNewEventForm(true);
        setEditingEvent(event); // Set the event being edited
    };

    const handleDeleteClick = (eventId) => {
        setLoader(true)
        dispatch(deleteEvent(eventId));
        setLoader(false)
    };

    // getting all the events
    const allEvents = useSelector(state => state.events.events);

    // checking if there is any event in the selected date
    const eventsForSelectedDate = allEvents.filter(event =>
        format(parseISO(event?.dateOfEvent), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    );

   
    console.log(allEvents)
    console.log(showNewEventForm)
    return (
        <div className="bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6 px-4">
            <p className='font-poppins text-lg px-2 mb-3 inline-block border-b-2 border-[#ddd]'>My Events</p>
            <h3 className="font-caveat lg:text-5xl md:text-4xl text-3xl">{format(selectedDate, 'dd MMMM yyyy')} ✨</h3>

            <div>
                {/* events start */}
                {loader ? <Loader /> : eventsForSelectedDate.length > 0 ? eventsForSelectedDate.map((event, index) => (
                    <div key={index} className={`border-[2px] border-[#ddd] lg:mt-6 mt-4 rounded-lg ${edit && 'hidden'}`}>
                    <div className='p-4'>
                        <div className=' flex items-center lg:gap-x-8 md:gap-x-6 gap-x-4'>
                                <h3 className='lg:text-2xl text-xl font-poppins flex items-center lg:gap-x-4 gap-x-2'><TfiNotepad className='lg:text-3xl md:text-2xl text-xl' /> {event.title}</h3>
                                {/* showing the event time in a fomatted way */}
                                <h3 className='lg:text-xl text-lg font-caveat  flex items-center'><IoMdTime className='font-semibold lg:text-2xl md:text-xl text-lg' />{format(parse(event?.time, 'HH:mm', new Date()), 'h:mm a')}</h3>
                        </div>
                            <div className=''>
                                {/* showing the created at time in a formatted way */}
                                <h4 className='md:text-md text-sm text-gray-500 font-poppins mt-2'>created at: {format(parseISO(event?.createdAt), 'dd MMM yyyy, h:mm a')}</h4>
                                {/* showing the description if it exists */}
                                {event?.description && <h2 className='mt-4 text-md font-poppins md:text-lg text-md text-primary'>{event?.description}</h2>}

                                {/* actions */}
                            <div className='flex items-center justify-end gap-x-4'>
                                    <button className='lg:text-4xl md:text-3xl text-2xl text-yellow-600' onClick={() => {
                                        setEdit(true)
                                        handleEditClick(event)
                                    }}><CiEdit /></button>
                                <button className='lg:text-4xl md:text-3xl text-2xl text-red-600' onClick={() => handleDeleteClick(event.id)}><MdDeleteOutline /></button>
                            </div>
                        </div>
                    </div>
                    </div>
                )) : <div className='lg:text-2xl text-xl font-poppins flex items-center gap-x-4 lg:my-6 my-4'>
                    <TfiNotepad className=' lg:text-3xl md:text-2xl text-xl' />
                    <p>No events found</p>
                </div>}
                {/* events end */}

                {/* add new event */}
                {showNewEventForm && <AddEventForm
                    setShowNewEventForm={setShowNewEventForm}
                    selectedDate={selectedDate}
                    editingEvent={editingEvent}
                    setEdit={setEdit}
                />}

                <div>
                    <button
                        onClick={handleNewEventClick}
                        className='flex items-center font-medium lg:text-xl text-lg text-primary gap-x-2 mt-2'><IoAdd /> New event</button>
                </div>

            </div>
        </div>
    );
};

export default DayEvents;