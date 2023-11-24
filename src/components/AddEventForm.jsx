/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addEvent, editEvent } from "../redux/actions/eventsActions";
import { TfiNotepad } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { v4 as uuidv4 } from 'uuid';
import Loader from "./Shared/Loader";

const AddEventForm = ({ setShowNewEventForm, selectedDate, editingEvent, setEditingEvent, setEdit }) => {
    const {
        register,
        handleSubmit } = useForm();
    const dispatch = useDispatch();
    const [time, setTime] = useState(editingEvent?.time || '00:00'); 
    const [loader, setLoader] = useState(false);
    const createdAt = new Date(); 
    const formattedTime = createdAt.toISOString();
    const uniqueId = uuidv4(); 
    

    // adding the event
    const onSubmit = (data) => {
        setLoader(true)

        if (editingEvent === null) {
            // If editingEvent is null, dispatch addEvent
            dispatch(addEvent({
                ...data,
                time: time, 
                dateOfEvent: selectedDate.toISOString(),
                createdAt: formattedTime,
                updatedAt: null,
                id: uniqueId
            }));
        } else {
            // If editingEvent is not null, dispatch editEvent
            dispatch(editEvent(editingEvent.id, {
                ...data,
                dateOfEvent: selectedDate.toISOString(),
                updatedAt: formattedTime,
                time: time, 
            }));
            setEditingEvent(null)
            setEdit(false);
        }
        setShowNewEventForm(false);
        setLoader(false)

    };

    return (
        <div
            data-aos="fade-top"
            data-aos-easing="linear"
            data-aos-duration="500">
            {loader ? <Loader /> : null}
            <form onSubmit={handleSubmit(onSubmit)} className='border-[2px] border-[#ddd] mt-6 rounded-lg flex flex-col p-4 '>
                {/* Title input */}
                <div className='lg:text-2xl text-xl font-poppins flex items-center md:gap-x-4 gap-x-2'>
                    <TfiNotepad className='lg:text-3xl md:text-2xl text-xl' />
                    <input
                        type="text"
                        {...register('title', { required: true })}
                        placeholder="Event title"
                        defaultValue={editingEvent !== null ? editingEvent?.title : 'Event title'}
                        className='lg:text-2xl text-xl font-poppins bg-bg text-primary outline-none focus:border-none'

                    />
                </div>

                {/* Event Time input */}
                <div className='lg:text-2xl text-xl font-poppins  py-2 pb-4 flex items-center md:gap-x-4 gap-x-2'>
                    <IoMdTime className='font-semibold md:text-2xl text-xl' />
                    <TimePicker
                        required
                        clockIcon={null}
                        onChange={setTime}
                        format="h:mm a"
                        amPmAriaLabel="Select AM/PM"
                        value={time} />
                </div>
                {/* Event Description input */}
                <textarea
                    type="text"
                    {...register('description')}
                    placeholder="event description (optional)"
                    defaultValue={editingEvent !== null ? editingEvent?.description : 'event description (optional)'}
                    className='h-20 border-2 border-[#ddd] rounded-lg p-4 outline-none'
                />

                {/* Submit button */}
                <div className='flex items-center justify-end gap-x-4'>
                    <button type="submit" className='lg:text-4xl md:text-3xl text-2xl text-green-600'><IoCheckmarkSharp /></button>
                    <button className='lg:text-4xl md:text-3xl text-2xl text-red-600' onClick={() => setShowNewEventForm(false)}><MdDeleteOutline /></button>
                </div>
            </form>
        </div>
    );
};

export default AddEventForm;