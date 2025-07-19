import { useEffect, useRef, useState } from 'react';
import { Search, ShoppingCart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
    }, [showInput]);

    return (
        <div className="grid grid-cols-3 items-center bg-gray-500 text-white px-8 py-4 sticky top-0 z-10 h-[80px]">
          <div className="heading">
            <ul className="list-none flex gap-4 items-center">
              <ShoppingCart />
              <li className="text-xl font-bold">MEGAHUT</li>
            </ul>
          </div>

          <nav className="navBar">
            <ul className="flex justify-center gap-6 list-none">
              <li className="cursor-pointer text-lg hover:underline">Home</li>
              <li className="cursor-pointer text-lg hover:underline" onClick={() => navigate('/nest')}>Nest</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/grocery')}>Grocery</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/clothings')}>Clothing</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/electronics')}>Electronics</li>
            </ul>
          </nav>

          <div className="rightHeader flex justify-end items-center gap-4 ">
            <div className={`flex items-center gap-2 rounded-full border-none p-2 transition-all duration-300 ease-in-out border ${showInput ? 'w-64 shadow-md bg-white' : 'w-12'} overflow-hidden`}>
              {/* Search Icon */}
              <button
                onClick={() => setShowInput(!showInput)}
                className={`p-1 rounded-full ${showInput ? '' : 'hover:bg-gray-600'}  transition`}
              >
                <Search size={20} className={` ${showInput ? 'text-gray-600' : 'text-white-600'}`}/>
              </button>
      
              {/* Input Field */}
              <input
                type="text"
                ref={inputRef}
                placeholder="Search product..."
                className={`bg-transparent outline-none text-black text-sm transition-all duration-300
                  ${showInput ? 'opacity-100 w-full' : 'opacity-0 w-0'} `}
                onBlur={() => setShowInput(false)}
              />

              {/* Close Icon */}
              <X
                size={25}
                className={`text-gray-500 hover:cursor-pointer rounded-full hover:bg-red-400 transition-opacity duration-200 ${showInput ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => setShowInput(false)}
              />
            </div>

            <span className="text-lg cursor-pointer" onClick={() => {navigate('/login')}}>Login</span>
          </div>
        </div>
    );
}

export default Header;