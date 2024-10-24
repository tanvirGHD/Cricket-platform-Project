import './Navbar.css'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto'>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0}  className="lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a className='font-bold'>Home</a></li>
                <li><a className='font-bold'>Fixture</a></li>
                <li><a className='font-bold'>Teams</a></li>
                <li><a className='font-bold'>Schedules</a></li>
            </ul>
            </div>
            <a className="ml-36 md:ml-0"><img src="assets/logo.png" alt="" /></a>
        </div>

        <div className="navbar-end">
        <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a className='font-bold'>Home</a></li>
            <li><a className='font-bold'>Fixture</a></li>
            <li><a className='font-bold'>Teams</a></li>
            <li><a className='font-bold'>Schedules</a></li>
            </ul>
        </div>
            <div className='flex items-center gap-2 border rounded-lg p-2 font-bold'>
            <div><span>0</span> Coin</div>
            <div><i className="fa-solid fa-circle-dollar-to-slot"></i></div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Navbar;