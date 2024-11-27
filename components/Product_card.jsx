import Image from 'next/image';
// import { FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="p-4">
        {/* Product Name and Power */}
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600">Power: {product.power}</p>

        {/* Product Price */}
        <p className="text-xl font-bold text-green-600 mt-2">${product.price}</p>

        {/* Product Description */}
        <p className="text-gray-700 text-sm mt-2 mb-4">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          {/* More Button */}
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
            More...
          </button>

          {/* Cart Button */}
          {/* <button
            className="p-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
            onClick={() => alert('Added to cart!')}
          >
            <FaShoppingCart />
          </button> */}
        </div>
      </div>
    </div>
  );
}
