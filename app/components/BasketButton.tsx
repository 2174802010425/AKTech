"use client";

import { Phone } from "@/sanity.types";
import { useCart } from "@/lib/store";

const BasketButton = ({ product }: { product: Phone }) => {
  const { getItemsCount, addItems, removeItem } = useCart();

  const quantity = getItemsCount(product._id);
  const totalPrice = ((product?.price || 0) * quantity).toLocaleString("vi-VN");

  function handleAddCart() {
    addItems(product);
    console.log("Your cart", getItemsCount(product._id));
  }

  function handleRemoveItem() {
    removeItem(product);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Hiển thị tổng giá */}
      <p className="text-2xl font-semibold text-blue-600">
        {totalPrice} ₫
      </p>

      {/* Nhóm nút điều khiển số lượng */}
      <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2 shadow-sm">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold transition"
          onClick={handleRemoveItem}
        >
          −
        </button>

        <span className="text-xl font-semibold min-w-[24px] text-center">
          {quantity}
        </span>

        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold transition"
          onClick={handleAddCart}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketButton;
