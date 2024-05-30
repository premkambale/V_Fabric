import React from 'react'
import "./BridalCol.css"

const BridalCol = () => {
    const products = [
        {
            id: 1,
            image: "https://via.placeholder.com/300",
            discount: 68,
            title: "Multi color Sequence Thread work Desi...",
            originalPrice: "10,999.00",
            discountedPrice: "3,499.00",
            reviews: 3,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300",
            discount: 50,
            title: "Elegant Floral Print Anarkali...",
            originalPrice: "8,999.00",
            discountedPrice: "4,499.00",
            reviews: 5,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300",
            discount: 40,
            title: "Designer Lehenga Choli...",
            originalPrice: "12,999.00",
            discountedPrice: "7,799.00",
            reviews: 8,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300",
            discount: 30,
            title: "Stylish Party Wear Gown...",
            originalPrice: "6,999.00",
            discountedPrice: "4,899.00",
            reviews: 10,
        },
    ];


    return (
        <div className='BridalColMainDiv'>
            <div className="trending-header">
                <h2>Bridal collection</h2>
                <p>Hot Selling Designer Bridal Lehenga with Premium Quality</p>
            </div>
            <div className="trendingGrid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                            <div className="discount-badge">-{product.discount}%</div>
                            <div className="overlay">
                                <button className="overlay-button">Quick view</button>
                                <button className="overlay-button">Add to cart</button>
                            </div>
                        </div>
                        <div className="product-details">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">
                                <span className="original-price">MRP. {product.originalPrice}</span> <span className="discounted-price">Rs. {product.discountedPrice}</span>
                            </p>
                            <div className="product-rating">
                                <span className="stars">★★★★★</span> <span className="reviews">{product.reviews} reviews</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BridalCol
