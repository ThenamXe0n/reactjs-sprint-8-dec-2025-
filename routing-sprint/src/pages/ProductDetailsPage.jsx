import { useParams } from "react-router";
import ProductReviewCard from "../components/ProductReviewCard";
import { useEffect, useState } from "react";

let sampleReviewData = {
  rating: 3,
  comment: "Would not recommend!",
  date: "2025-04-30T09:41:02.053Z",
  reviewerName: "Eleanor Collins",
  reviewerEmail: "eleanor.collins@x.dummyjson.com",
};

function ProductDetailsPage() {
  const [sampleData, setSampleData] = useState({
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "BEA-ESS-ESS-001",
    weight: 4,
    dimensions: {
      width: 15.14,
      height: 13.08,
      depth: 22.99,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lucas Gordon",
        reviewerEmail: "lucas.gordon@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  });
  const params = useParams();

  const selectedproductId = params.id;

  console.log("param is ", selectedproductId);

  useEffect(() => {
    async function loadSelectedData() {
      let response = await fetch(
        `https://dummyjson.com/products/${selectedproductId}`
      );
      let data = await response.json();
      setSampleData(data);
    }
    loadSelectedData();
  }, []);

  return (
    <section className="w-screen p-6 flex">
      {/* ===============image sec============ */}
      <div className="flex-1">
        <img
          className="w-11/12 h-auto shadow-lg rounded-md shadow-black/40"
          src={sampleData.thumbnail}
          alt={sampleData.title}
        />
      </div>
      {/* ===================details sec=========== */}
      <div className="flex-1 space-y-2">
        <h1 className="text-4xl font-bold text-left capitalize">
          {sampleData?.title}
        </h1>
        {/* flags  */}
        <div className="flex  items-center gap-x-2 w-full flex-wrap">
          {sampleData.tags.map((tag, tagindex) => (
            <span
              key={tagindex}
              className="capitalize text-xs border-2 px-2 border-gray-600/40 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* ratings */}
        <span>Ratings : {sampleData.rating} </span>
        <hr className="my-2 text-gray-300 border-2" />
        <div className="text-3xl text-neutral-700 font-bold">
          <span className="text-red-500">
            -{sampleData.discountPercentage}%
          </span>
          <span>
            <sup>₹</sup>
            {sampleData.price * 91}
          </span>
        </div>
        {/* m.r.p  */}
        <div>
          <span className="font-semibold text-neutral-700">M.R.P</span> :{" "}
          <del>
            ₹
            {(
              sampleData.price * 91 * (sampleData.discountPercentage / 100) +
              sampleData.price * 91
            ).toFixed(2)}
          </del>
        </div>
        {/* stocks and desc */}
        <div className="bg-black rounded-full px-3 py-1 w-fit">
          <span className="text-red-600">
            Only {sampleData.stock} are left !
          </span>
        </div>
        <p className="text-neutral-700">{sampleData.description}</p>
        <hr className="my-2 text-gray-300 border-2" />
        {/* review section  */}
        <div>
          <h4 className="text-lg font-bold my-4">Reviews : </h4>
          <div className="flex flex-wrap gap-4">
            {sampleData.reviews.map((review, reviewIdx) => (
              <ProductReviewCard
                key={reviewIdx}
                comment={review.comment}
                date={review.date}
                rating={review.rating}
                reviewerEmail={review.reviewerEmail}
                reviewerName={review.reviewerName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
