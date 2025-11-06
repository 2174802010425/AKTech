"use client";
import { useState } from "react";
import { Phone } from "@/sanity.types";
import { ChangeEvent } from "react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { formatCurrency } from "@/lib/formatCurrentcy";

export default function FilterPhonePrice({ products }: { products: Phone[] }) {
  const [initalProducts, setInitalProducts] = useState(products);

  function handleFilterPrice(e: ChangeEvent<HTMLSelectElement>) {
    const filterOptions = e.target.value;
    if (filterOptions === "asc") {
      const newProducts = [...initalProducts].sort(
        (a, b) => a.price! - b.price!
      );
      setInitalProducts(newProducts);
    } else if (filterOptions === "desc") {
      const newProducts = [...initalProducts].sort(
        (a, b) => b.price! - a.price!
      );
      setInitalProducts(newProducts);
    } else {
      setInitalProducts(products);
    }
  }
  return (
    <>
      <select onChange={handleFilterPrice}>
        <option value="">Filter price</option>
        <option value="asc">Low - High</option>
        <option value="desc">High - Low</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {initalProducts.map((phone: any) => (
          <div
            key={phone._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {phone.image && (
              <div className="relative w-full h-60">
                <Link href={`/detail/${phone.slug?.current}`}>
                  <Image
                    src={urlFor(phone.image).url()}
                    alt={phone.name}
                    fill
                    className="w-full h-56 object-contain"
                  />
                </Link>
              </div>
            )}

            {/* Tên & Giá */}
            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">{phone.name}</h2>
              <p className="text-blue-600 font-bold">
                {formatCurrency(phone.price)}
              </p>
            </div>

            {/* Hãng sản xuất */}
            <p className="text-sm text-gray-500 mt-1">
              {phone.manufactor?.name}
            </p>

            {/* Mô tả (PortableText + truncate nếu dài) */}
            <div className="mt-3 text-gray-700 text-sm line-clamp-3 overflow-hidden">
              <PortableText value={phone.description} />
            </div>

            {/* Nút xem thêm */}
            <Link
              href={`/detail/${phone.slug?.current}`}
              className="mt-4 bg-blue-600 text-white text-center py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
