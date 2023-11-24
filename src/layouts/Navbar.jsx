import { Link } from 'react-router-dom';
import logo from '/assets/logofull.png'
const Navbar = () => {
    return (
        <div className='md:px-8 md:py-4 px-4 py-2 bg-bg'>
           <Link to='/'> <img src={logo} alt="logo" className='md:w-[15%] w-[35%]' /> </Link>
        </div>
    );
};

export default Navbar;