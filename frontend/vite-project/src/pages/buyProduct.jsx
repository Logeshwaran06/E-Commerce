import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BuyProduct() {
    const { id } = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(location.state || null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!product) {
            const storedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
            if (storedProduct && storedProduct.id === parseInt(id)) {
                setProduct(storedProduct);
            }
        }
    }, [id, product]);

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleBuyNow = () => {
        alert(`You have bought ${quantity} of ${product.name}!`);
    };

    const handleAddToCart = () => {
        alert(`${quantity} ${product.name} added to cart!`);
    };

    return (
        <div style={{ padding: "20px", color:"black", backgroundColor: "rgba(255, 255, 255, .8)" }}>
            <h2>{product.name}</h2>
            <div className="" style={{ display: "flex", gap: "20px" }}>
                {/* Product Image */}
                <img src={product.image} alt={product.name} width="250px" />

                {/* Product Details */}
                <div>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Price:</b> {product.price}</p>
                    <p><b>Description:</b> This is a high-quality {product.name} that fits your needs.</p>
                    <p><b>Availability:</b> {Math.random() > 0.2 ? "In Stock ✅" : "Out of Stock ❌"}</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐ ☆ (4.2/5)</p>
                    <p><b>Seller:</b> ABC Electronics</p>

                    {/* Quantity Selector */}
                    <label><b>Quantity:</b> </label>
                    <select value={quantity} onChange={handleQuantityChange}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>

                    {/* Buttons */}
                    <div style={{ marginTop: "10px" }}>
                        <button onClick={handleBuyNow} style={{ marginRight: "10px" }}>Buy Now</button>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                    {/* Return & Shipping Info */}
                    <p style={{ marginTop: "20px", color: "gray" }}>
                        ✅ Free returns within 7 days. 🚚 Fast shipping available.
                    </p>
                </div>
            </div>
        </div>
    );
}
