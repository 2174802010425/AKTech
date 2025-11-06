import { getAllPhones } from "@/sanity/actions/getAllPhones";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Phone } from "@/sanity.types";
import { formatCurrency } from "@/lib/formatCurrentcy";
import Link from "next/link";
import FilterPhonePrice from "../components/FilterPhonePrice";
export default async function Home() {
  const phones: Phone[] = await getAllPhones();
  
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Cửa hàng linh kiện điện tử</h1>
      <FilterPhonePrice products={phones}/>
      
    </main>
  );
}
