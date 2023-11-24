/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addEvent } from "../redux/actions/eventsActions";
import { TfiNotepad } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const AddEventForm = ({ setShowNewEventForm }) => {
    const {
        register,
        handleSubmit } = useForm();
    const dispatch = useDispatch();
    const [time, onChange] = useState('00:00');
    const createdAt = new Date(); 
    const formattedTime = createdAt.toISOString();

    // adding the event
    const onSubmit = (data) => {
        dispatch(addEvent({ ...data, createdAt: formattedTime }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='border-[2px] border-[#ddd] mt-6 rounded-lg flex flex-col p-4 '>
                {/* Title input */}
                <div className='text-2xl font-poppins flex items-center gap-x-4'>
                    <TfiNotepad className=' text-3xl' />
                    <input
                        type="text"
                        {...register('title', { required: true })}
                        placeholder="Event title"
                        className='text-2xl font-poppins bg-bg text-primary outline-none focus:border-none'

                    />
                </div>

                {/* Event Time input */}
                <div className='text-2xl font-poppins  py-2 pb-4 flex items-center gap-x-4'>
                    <IoMdTime className='font-semibold text-2xl' />
                    <TimePicker
                        required
                        clockIcon={null}
                        onChange={onChange}
                        value={time} />
                </div>
                {/* Event Description input */}
                <textarea
                    type="text"
                    {...register('description')}
                    placeholder="event description (optional)"
                    className='h-20 border-2 border-[#ddd] rounded-lg p-4 outline-none'
                />

                {/* Submit button */}
                <div className='flex items-center justify-end gap-x-4'>
                    <button type="submit" className='text-4xl text-green-600'><IoCheckmarkSharp /></button>
                    <button className='text-4xl text-red-600' onClick={() => setShowNewEventForm(false)}><MdDeleteOutline /></button>
                </div>
            </form>
        </div>
    );
};

export default AddEventForm;