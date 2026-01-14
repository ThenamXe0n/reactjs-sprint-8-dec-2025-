
function ProductReviewCard({
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail,
}) {
  return <div className="w-64 p-2 rounded-md shadow-lg shadow-black/60 bg-blue-300/20">
    <h5 className="text-sm font-bold text-green-900 ">{reviewerName} | <span>{new Date(date).toDateString()}</span></h5>
    <p className="text-xs text-neutral-400">{reviewerEmail}</p>
    <p>{comment}</p>

  </div>;
}

export default ProductReviewCard;
