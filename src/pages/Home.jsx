import Calendar from "../components/Calendar";
import HistoricalEvent from "../components/HistoricalEvent";

const Home = () => {
    return (
        <div className="lg:md:px-12 px-6 md:grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2" data-aos="fade-right">
                <Calendar />
            </div>
            <div className="md:col-span-1" data-aos="fade-left">
                <HistoricalEvent/>

            </div>
        </div>
    );
};

export default Home;