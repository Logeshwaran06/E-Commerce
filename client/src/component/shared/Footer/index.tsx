const Footer = () => {
    return (
        <div className="bg-gray-500 text-white p-6 mt-6 gap-8">
          <div className="footer grid grid-cols-3 gap-8 mb-4">
          <div className="Unknown Item">
            <h3 className="pb-4">MEGAHUT</h3>
            <p>Your one stop shop for everything you need.</p>
          </div>
          <div className="Unknown Item">
            <h3 className="pb-4">CATEGORIES</h3>
            <ul className="list-none">
              <li className="cursor-pointer hover:shadow-md text-color-orange">NEST</li>
              <li className="cursor-pointer hover:shadow-md text-color-orange">Grocery</li>
              <li className="cursor-pointer hover:shadow-md text-color-orange">Clothing</li>
              <li className="cursor-pointer hover:shadow-md text-color-orange">Electronics</li>
            </ul>
          </div>
          <div className="Unknown Item">
            <h3 className="pb-4">CONTACT</h3>
            <p className="cursor-pointer hover:shadow-md text-color-orange">Email: logeshmohan4080@gmail.com</p>
            <p className="cursor-pointer hover:shadow-md text-color-orange">Phone: +91 90808 91865</p>
          </div>
          </div>
          <hr />
          <div className="text-center py-4">
            &copy; 2025 MEGAHUT. All rights reserved.
          </div>
        </div>
    );
}

export default Footer;