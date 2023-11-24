
const UsageGuide = () => {
    return (
        <div className="border-[rgb(153, 143, 199,0.5)] rounded-lg border-[.5px] mt-8 py-6 px-4">
            <h2 className='lg:text-4xl md:text-3xl text-2xl font-caveat font-semibold'>How to use this application 🧐?</h2>

            <div className="md:mt-8 mt-4">
                <div className="mb-8">
                    <h2 className="md:text-2xl text-xl font-semibold font-poppins">☘️ See calendar</h2>
                    <p className="mt-2 md:text-lg text-md">See calendar in home page. If you want to add events on some certain days or check events; click on any of the dates</p>
                    <img src="https://i.ibb.co/T1PkF0t/image.png" alt="calendar" />
                </div>
                <div className="mb-8">
                    <h2 className="md:text-2xl text-xl font-semibold font-poppins">☘️ See what happened on this day</h2>
                    <p className="mt-2 md:text-lg text-md">Lots of stuff happen everyday, in this part you will see 5 things that happened in the past on this day. You can see the year if the event highlighted</p>
                    <img src="https://i.ibb.co/PmqB61d/image.png" alt="calendar" />
                </div>
                <div className="mb-8">
                    <h2 className="md:text-2xl text-xl font-semibold font-poppins">☘️ Check your events</h2>
                    <p className="mt-2 md:text-lg text-md">After clicking on the date, if there are any events created before for that date, you will see it there. You can edit it or delete it. If there is none, you will see no events</p>
                    <img src="https://i.ibb.co/NrHPsq3/image.png" alt="calendar" />
                </div>
                <div className="mb-8">
                    <h2 className="md:text-2xl text-xl font-semibold font-poppins">☘️ Check your events</h2>
                    <p className="mt-2 md:text-lg text-md">You will see a button to add new events, you will need to provide the informations as demonstrated</p>
                    <img src="https://i.ibb.co/fvm9s1g/image.png" alt="calendar" />
                </div>
            </div>
        </div>
    );
};

export default UsageGuide;