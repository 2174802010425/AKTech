"use client";

import { useCart } from "@/lib/store";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatCurrentcy";

export default function StorePage() {
  const { items, removeItem, clearBasket } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + (item.product.price || 0) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Giỏ hàng của bạn</h1>
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">Giỏ hàng của bạn đang trống</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Giỏ hàng của bạn</h1>
          <button
            onClick={clearBasket}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Xóa tất cả
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {items.map((item) => {
            const imageUrl = item.product.image
              ? urlFor(item.product.image).width(200).height(200).url()
              : null;

            return (
              <div
                key={item.product._id}
                className="flex items-center gap-6 pb-6 mb-6 border-b last:border-b-0 last:pb-0 last:mb-0"
              >
                {imageUrl && (
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={item.product.name || "Product"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <Link
                    href={`/detail/${item.product.slug?.current}`}
                    className="text-xl font-semibold hover:text-blue-600 transition"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-500 text-sm mt-1">
                    Số lượng: {item.quantity}
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">
                    {formatCurrency((item.product.price || 0) * item.quantity)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.product)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Xóa
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Tổng cộng:</span>
            <span className="text-2xl font-bold text-blue-600">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

