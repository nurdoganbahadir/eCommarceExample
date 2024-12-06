"use client";

import CardRating from "../Card/CardRating";

export default function ProductComments({ reviews }) {
  return (
    <div className="p-4" id="comments-section">
      <h1 className="font-bold text-2xl mb-4">Comments</h1>
      <div className="space-y-4">
        {reviews?.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex items-start gap-4 relative"
            >
              {/* Avatar */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white text-lg font-semibold rounded-full">
                {review.reviewerName?.charAt(0).toUpperCase()}
              </div>
              {/* Comment Content */}
              <div>
                <p className="font-semibold text-gray-800">
                  {review.reviewerName}
                </p>
                <p className="text-gray-600 text-sm">{review.comment}</p>
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="absolute right-2 top-2">
                <CardRating rating={review.rating} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to review!
          </p>
        )}
      </div>
    </div>
  );
}
