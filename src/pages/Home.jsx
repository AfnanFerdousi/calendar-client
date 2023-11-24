import Calendar from "../components/Calendar";

const Home = () => {
    return (
        <div className="lg:md:px-12 grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <Calendar />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;