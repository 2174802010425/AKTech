"use client";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
const ProductGallery = ({ variants, defaultImage }: any) => {
  const [selectedVariant, setSelectedVariant] = useState(variants?.[0] || null);
  const currentImage = selectedVariant?.image || defaultImage;
 console.log(variants)
  return (
    <div>
      <Image
        src={urlFor(currentImage).url()}
        alt="image"
        width={400}
        height={400}
        className="rounded-xl object-contain"
      />
      {variants.length > 1 && (
        <div className="flex gap-2 mt-2">
          {variants.map((variant: any) => (
            <label key={variant._key}>
              <input
                type="radio"
                name="color"
                value={variant.color}
                checked={selectedVariant?._key === variant._key}
                onChange={() => setSelectedVariant(variant)}
                className="hidden peer"
              />
              <div
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedVariant?._key === variant._key
                    ? "border-blue-600 scale-110"
                    : "border-gray-300"
                } transition-transform duration-200`}
                style={{ backgroundColor: variant.color }}
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
