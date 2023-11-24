
import {
    format,
    startOfMonth
} from 'date-fns';
import { TfiNotepad } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const DayEvents = () => {
    const currentDate = startOfMonth(new Date());
    const formattedDate = format(currentDate, "EEEE dd MMMM, h:mm a");
    return (
        <div className="bg-bg mt-8 border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] py-6 px-4">
            <p className='font-poppins text-lg px-2 mb-3 inline-block border-b-2 border-[#ddd]'>My Events</p>
            <h3 className="font-caveat text-5xl">{format(currentDate, 'dd MMMM yyyy')} ✨</h3>

            <div>
                {/* events start */}
                <div className='border-[2px] border-[#ddd] mt-6 rounded-lg'>
                    <div className='p-4'>
                        <div className=' flex items-center gap-x-8'>
                            <h3 className='text-2xl font-poppins flex items-center gap-x-4'><TfiNotepad className=' text-3xl' /> Meeting with Mariya</h3>
                            <h3 className='text-xl font-caveat  flex items-center'><IoMdTime className='font-semibold text-2xl' />9:00 AM</h3>
                        </div>
                        <div className=''>
                            <h4 className='text-md text-gray-500 font-poppins'>created at: {formattedDate}</h4>
                            <h2 className='mt-4 text-md font-poppins text-lg text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores voluptatum doloribus quo at illum consectetur earum, deleniti quaerat numquam sint molestias soluta, unde explicabo magni. Nostrum laudantium magnam blanditiis obcaecati tempora ad, nobis quam, est excepturi nemo minus laborum?</h2>
                            <div className='flex items-center justify-end gap-x-4'>
                                <button className='text-3xl text-green-600'><CiEdit /></button>
                                <button className='text-3xl text-red-600'><MdDeleteOutline /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* events end */}
                <div>
                    <button className='flex items-center font-medium text-xl text-primary gap-x-2 mt-2'><IoAdd /> New event</button>
                </div>

          </div>
        </div>
    );
};

export default DayEvents;