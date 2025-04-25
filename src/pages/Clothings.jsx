import {Search, ShoppingCart, MonitorSmartphone, Shirt, AppleIcon, CookingPot } from "lucide-react";

export default function Clothings() {

    return (
        <>
          <div className="bg-gray-200 min-h-screen">
            {/* Header */}
            <div className="grid grid-cols-3 items-center bg-gray-500 text-white px-8 py-4 sticky top-0 z-10">
              <div className="heading">
                <ul className="list-none flex gap-4 items-center">
                  <ShoppingCart />
                  <li className="text-xl font-bold">MEGAHUT</li>
                </ul>
              </div>
    
              <nav className="navBar">
                <ul className="flex justify-center gap-6 list-none">
                  <li className="cursor-pointer text-lg">Home</li>
                  <li className="cursor-pointer text-lg">Nest</li>
                  <li className="cursor-pointer text-lg">Grocery</li>
                  <li className="cursor-pointer text-lg">Clothing</li>
                  <li className="cursor-pointer text-lg">Electronics</li>
                </ul>
              </nav>
    
              <div className="rightHeader flex justify-end items-center gap-4">
                <Search size={20} />
                <span className="text-lg cursor-pointer">Login</span>
              </div>
            </div>
    
            
            <div className="bg-gray-500 text-white p-6 mt-6 gap-8">
              <div className="footer grid grid-cols-3 gap-8 mb-4">
              <div className="">
                <h3 className="pb-4">MEGAHUT</h3>
                <p>Your one stop shop for everything you need.</p>
              </div>
              <div className="">
                <h3 className="pb-4">CATEGORIES</h3>
                <ul className="list-none">
                  <li>NEST</li>
                  <li>Grocery</li>
                  <li>Clothing</li>
                  <li>Electronics</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4">CONTACT</h3>
                <p>Email: logeshmohan4080@gmail.com</p>
                <p>Phone: +91 90808 91865</p>
              </div>
              </div>
              <hr />
              <div className="text-center py-4">
                &copy; 2025 MEGAHUT. All rights reserved.
                </div>
            </div>
          </div>
        </>
      );
    
    }