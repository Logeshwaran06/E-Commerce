import "./home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    const products = [
        { id: 1, name: "Sports shoe", category: "Accessory", price: "₹499", image: "/Images/Image1.jpg" },
        { id: 2, name: "Dell Optiplex 3060 MT Core i5", category: "Electronics", price: "₹31,199", image: "/Images/image2.jpg" },
        { id: 3, name: "Geniatech XPI-3128 Single Board Computer", category: "Electronics", price: "₹499", image: "/Images/image3.jpg" },
        { id: 4, name: "ESR for AirPods Pro Case", category: "Electronics", price: "₹1,249", image: "/Images/image4.jpg" },
        { id: 5, name: "Airpods Pro 1 Silicone Case (Kitkat Red)", category: "Electronics", price: "₹699", image: "/Images/image5.jpg" },
        { id: 6, name: "Arduino UNO Compatible Board", category: "Electronics", price: "₹300", image: "/Images/image6.jpg" },
        { id: 7, name: "Travel bag for hiking trekking camping", category: "Accessory", price: "₹529", image: "/Images/image7.jpg" },
        { id: 8, name: "Wild Stone Long Lasting Perfume", category: "Cosmetic", price: "₹292", image: "/Images/image8.jpg" }
    ];

    const backgroundBannerImage = {
        backgroundImage: `url(/Images/BannerImage1.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "600px",
    };

    const handleBuyProduct = (product) => {
        navigate(`/e-commerce/buy-product/${product.id}`, { state: product });
    };

    return (
        <>
            <header className="header">
                <h1 className="headingTag">My Store</h1>
                <ul className="navBar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            
            <div style={backgroundBannerImage}>
                <h1 className="bannerText">New Collection</h1>
            </div>
            
            <div className="homeContainer">
                {products.map((product) => (
                    <div className="Items Items-1" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.category}</p>
                        <p><b>{product.price}</b></p>
                        <button className="buy" onClick={() => handleBuyProduct(product)}>Buy</button>
                        <button className="cart">Add cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
