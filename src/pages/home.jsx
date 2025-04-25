import {Search, ShoppingCart, MonitorSmartphone, Shirt, AppleIcon, CookingPot } from "lucide-react";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
// import { useState, useNav } from "react";

export default function Home() {

  const navigate = useNavigate();
  

  const slides = [
    { id: "1", image: "/E-Commerce/Banner_Images/Home.png", },
    { id: "2", image: "/E-Commerce/Banner_Images/Nest.png", },
    { id: "3", image: "/E-Commerce/Banner_Images/Grocery.png", },
    { id: "4", image: "/E-Commerce/Banner_Images/Clothings.png", },
    { id: "5", image: "/E-Commerce/Banner_Images/Electronics.png", },
  ];

  const productDetails = [
    { id: "1", name: "Flask Water Bottle", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_1.jpg" },
    { id: "2", name: "Non-Stick Pan", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_2.jpg" },
    { id: "3", name: "Mixer Grinder", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_3.jpg" },
    { id: "4", name: "Pressure Cooker", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_4.jpg" },
    { id: "5", name: "Electric Kettle", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_5.jpg" },
    { id: "6", name: "Storage Containers", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_6.jpg" },
    { id: "7", name: "Knife Set", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_7.jpg" },
    { id: "8", name: "Water Bottle", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_8-removebg-preview.png" },
    { id: "9", name: "Dish Rack", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_9-removebg-preview.png" },
    { id: "10", name: "Gas Stove", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_10.jpg" },
    { id: "11", name: "Extension Box", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_11.jpg" },
    { id: "12", name: "Table Lamp", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_12.jpg" },
    { id: "13", name: "Wall Clock", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_13.jpg" },
    { id: "14", name: "Vase Stand For Flower", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_14-removebg-preview.png" },
    { id: "15", name: "Cotton Towel", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_15.jpg" },
    { id: "16", name: "Comfort Anti Bacterial Conditioner", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_16.jpg" },
    { id: "17", name: "Bucket & Mug", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_17.jpg" },
    { id: "18", name: "Cleaning Mop", category: "Nest", price: "$10", image: "/E-Commerce/nest/nestImage_18.jpg" },

    { id: "19", name: "Avocado", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_1.jpg" },
    { id: "20", name: "Mango", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_2.jpg" },
    { id: "21", name: "Cabbage", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_3.jpg" },
    { id: "22", name: "Banana", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_4.jpg" },
    { id: "23", name: "Bitter Gourd", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_5.jpg" },
    { id: "23", name: "Papaya", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_6.jpg" },
    { id: "24", name: "Carrot", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_7.jpg" },
    { id: "25", name: "Cucumber", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_8.jpg" },
    { id: "26", name: "Durian Fruit", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_9-removebg-preview.png" },
    { id: "27", name: "Blueberry", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_10.jpg" },
    { id: "28", name: "Okra", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_11.jpg" },
    { id: "29", name: "Ginger", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_12.jpg" },
    { id: "30", name: "Green Apple", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_13.jpg" },
    { id: "31", name: "Dragon Fruit", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_14.jpg" },
    { id: "32", name: "Potato", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_15.jpg" },
    { id: "33", name: "Onion", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_16.jpg" },
    { id: "34", name: "Tomato", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_17.jpg" },
    { id: "35", name: "Broccoli", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_18.jpg" },
    { id: "36", name: "Watermelon", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/vegitableImage_19.jpg" },
    { id: "37", name: "Kiwi Fruit", category: "Grocery", price: "$10", image: "/E-Commerce/vegitables/kiwi.jpg" },

    { id: "38", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_1.jpg" },
    { id: "39", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_2.png" },
    { id: "40", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_3.jpg" },
    { id: "41", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_4.jpg" },
    { id: "42", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_5.jpg" },
    { id: "43", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_6.png" },
    { id: "44", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_7.png" },
    { id: "45", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_8.jpg" },
    { id: "46", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_9.jpg" },
    { id: "47", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_10.jpg" },
    { id: "48", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_11.jpg" },
    { id: "49", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_12.png" },
    { id: "50", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_13.png" },
    { id: "51", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_14.jpg" },
    { id: "52", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_15.jpg" },
    { id: "53", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_16.jpg" },
    { id: "54", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_17.jpg" },
    { id: "55", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_18.jpg" },
    { id: "56", name: "Unknown Item", category: "Clothes", price: "$10", image: "/E-Commerce/cloths/clotheImage_19.jpg" },

    { id: "57", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_1.png" },
    { id: "58", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_2.png" },
    { id: "59", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_3.jpg" },
    { id: "60", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_4.jpg" },
    { id: "61", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_5.jpg" },
    { id: "62", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_6.png" },
    { id: "63", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_7.png" },
    { id: "64", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_8.png" },
    { id: "65", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_9.png" },
    { id: "66", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_10.jpg" },
    { id: "67", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_11.jpg" },
    { id: "68", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_12.png" },
    { id: "69", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_13.jpg" },
    { id: "70", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_14.jpg" },
    { id: "71", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_15.png" },
    { id: "72", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_16.png" },
    { id: "73", name: "Unknown Item", category: "Electronics", price: "$10", image: "/E-Commerce/electronics/electronicImage_17.jpg" },

  ];

  const sections = [
    {
      id: "1",
      img: CookingPot,
      title: "Nest",
      description: "All your daily home needs in one place.",
    },
    {
      id: "2",
      img: AppleIcon,
      title: "Grocery",
      description: "Fresh fruits, veggies, and essentials delivered.",
    },
    {
      id: "3",
      img: Shirt,
      title: "Clothing",
      description: "Trendy outfits for all seasons and styles.",
    },
    {
      id: "4",
      img: MonitorSmartphone,
      title: "Electronics",
      description: "Latest gadgets and devices at best prices.",
    },
  ];
  
  const { currentSlide, setCurrentSlide} = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000)

    return () => clearInterval(timer);
  }, [slides.length]);

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
              <li className="cursor-pointer text-lg hover:underline">Home</li>
              <li className="cursor-pointer text-lg hover:underline" onClick={() => navigate('/nest')}>Nest</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/grocery')}>Grocery</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/clothings')}>Clothing</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/electronics')}>Electronics</li>
            </ul>
          </nav>

          <div className="rightHeader flex justify-end items-center gap-4">
            <Search size={20} className="hover:cursor-pointer" />
            <span className="text-lg cursor-pointer" onClick={() => {navigate('/login')}}>Login</span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="overflow-hidden relative">
          <div className="flex animate-slide">
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-fit"> 
                <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-[22rem] object-cover" />
                <div className="absolute left-9 bottom-8 bg-yellow-400 p-2 rounded-lg font-bold cursor-pointer">Shop Now</div>

              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-lg shadow mt-6">
          {sections.map((section) => {
            const Icon = section.img;
            return (
              <div
                key={section.id}
                className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-300 bg-gray-50 cursor-pointer shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 mb-2 text-blue-600" />
                <h2 className="font-semibold text-lg">{section.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{section.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products */}
        <div className="p-6  mx-auto">
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {productDetails.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg h-fit p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 ml-2 py-1 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="mt-2 bg-blue-500 text-white px-4 ml-8 py-1 rounded hover:bg-blue-600">More Details</button>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </>
  );
}
