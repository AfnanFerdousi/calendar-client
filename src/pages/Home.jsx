import Calendar from "../components/Calendar";
import HistoricalEvent from "../components/HistoricalEvent";

const Home = () => {
    return (
        <div className="lg:md:px-12 grid grid-cols-3 gap-4">
            <div className="col-span-2" data-aos="fade-right">
                <Calendar />
            </div>
            <div className="col-span-1" data-aos="fade-left">
                <HistoricalEvent/>

            </div>
        </div>
    );
};

export default Home;