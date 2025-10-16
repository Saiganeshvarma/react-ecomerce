import React, { useEffect, useState } from 'react'
import "./Products.css"

function Products() {
    const [data, setData] = useState([])

    async function fetchData() {
        const result = await fetch("https://fakestoreapi.com/products")
        const myResult = await result.json()
        setData(myResult)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="products-container">
            <h1 className="main-heading">🛍️ Product List</h1>
            <div className="products-grid">
                {data.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} className="product-image" />
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-price">${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
