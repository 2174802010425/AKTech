import { getPhoneDetail } from "@/sanity/actions/getPhoneDetail";

import { PortableText } from "@portabletext/react";

import ProductGallery from "@/app/components/ProductGallery";
import BasketButton from "@/app/components/BasketButton";

export default async function PhoneDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productDetail = await getPhoneDetail(slug);
 
  if (!productDetail) {
    return (
      <p className="flex items-center justify-center text-red-500 min-h-screen">
        No product found !!!
      </p>
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full flex justify-center">
          <ProductGallery
            variants={productDetail.variants || []}
            defaultImage={productDetail.image}
          />
        </div>
        {/* productDetail Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{productDetail?.name}</h1>
          {productDetail?.manufactor && (
            <p className="text-gray-500 text-sm mb-4">
              Thương hiệu:{" "}
              <span className="font-medium text-gray-700">
                {productDetail?.manufactor.name}
              </span>
            </p>
          )}
          {/* increase / decrease button */}
          <BasketButton product={productDetail}/>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-xl font-semibold mb-3">Mô tả sản phẩm</h2>
        <div className="text-gray-500 mt-5">
          <PortableText value={productDetail?.description!} />
        </div>
      </div>
    </div>
  );
}
