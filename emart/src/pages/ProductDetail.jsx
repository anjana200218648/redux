import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../redux/cardSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate hook to redirect to cart page
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id && products && products.length > 0) {
            const parsedId = parseInt(id, 10);
            if (!isNaN(parsedId)) {
                const newProduct = products.find(product => product.id === parsedId);
                setProduct(newProduct);
            }
        }
    }, [id, products]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product)); // Dispatch action to add the product to the cart
            navigate('/cart'); // Redirect to the cart page after adding the product
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            {products.length === 0 ? (
                <div className="text-center text-lg text-gray-500">Loading products...</div>
            ) : product ? (
                <div>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        {/* Product Image */}
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-contain rounded-lg shadow-lg"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="md:ml-8 w-full md:w-1/2">
                            <h1 className="text-3xl font-semibold text-red-600 mb-4">{product.name}</h1>
                            <p className="text-xl text-gray-700 mb-4">Price: ${product.price}</p>
                            <p className="text-gray-600 mb-6">{product.description || 'No description available'}</p>
                            <button
                                onClick={handleAddToCart}
                                className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-lg text-red-600">Product not found</div>
            )}
        </div>
    );
};

export default ProductDetail;
