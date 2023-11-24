import { Link } from 'react-router-dom';
import logo from '/assets/logofull.png'
const Navbar = () => {
    return (
        <div className='lg:px-32 md:px-8 md:py-4 px-4 py-2 bg-bg flex items-center justify-between'>
            <Link to='/'> <img src={logo} alt="logo" className='lg:md:w-[50%] w-[55%]' /> </Link>
            
            <Link to='/guide' className='lg:text-xl md:text-lg text-md font-semibold underline text-primary hover:text-secondary w-full text-end'>Guide☘️</Link>
        </div>
    );
};

export default Navbar;