import Image from 'next/image';
// import { FaShoppingCart } from 'react-icons/fa';

function ProductCard({ product }) {
  return (
    <div className="max-w-xs rounded-lg shadow-lg bg-white border border-gray-200 transform hover:scale-105 transition-transform duration-200 ease-in-out">
      {/* Image */}
      <button className="relative w-full h-48">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg hover:opacity-90 transition-opacity duration-200"
        />
      </button>

      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        {/* Price */}
        <p className="text-xl font-bold text-green-600 mt-2">{product.price}</p>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-1 mb-4">{product.description}</p>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          {/* More Info Button */}
          <button
            className="text-sm font-medium text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors duration-200"
          >
            More Info
          </button>
          {/* Add to Cart Button */}
          <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList({ products }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
