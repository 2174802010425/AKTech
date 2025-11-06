import { getSearchPhoneByName } from "@/sanity/actions/getSearchPhoneByName";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { formatCurrency } from "@/lib/formatCurrentcy";
export default async function GetProductByName({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const products = await getSearchPhoneByName(query);
  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((phone: any) => (
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

          <div className="mt-3 text-gray-700 text-sm line-clamp-3 overflow-hidden">
            <PortableText value={phone.description} />
          </div>

          <Link
            href={`/detail/${phone.slug?.current}`}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition text-center"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
