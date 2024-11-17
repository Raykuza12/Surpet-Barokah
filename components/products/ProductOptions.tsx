// components/products/ProductOptions.tsx
import React, { useState } from "react";

interface Option {
  name: string;
  values: string[];
}

interface Size {
  name: string;
  price: number;
}

interface ProductOptionsProps {
  colors: string[];
  sizes: Size[];
  onOptionsChange: (color: string, size: Size) => void;
}

export default function ProductOptions({
  colors,
  sizes,
  onOptionsChange,
}: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onOptionsChange(color, selectedSize);
  };

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
    onOptionsChange(selectedColor, size);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900">Warna</h3>
        <div className="mt-2 flex items-center space-x-3">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                selectedColor === color ? "ring-2 ring-primary" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900">Ukuran</h3>
        <div className="mt-2 flex items-center space-x-3">
          {sizes.map((size) => (
            <button
              key={size.name}
              className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                selectedSize.name === size.name
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
