import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "The interior design work done by this team was exceptional! The quality and attention to detail were beyond my expectations. Highly recommended!",
      rating: 5,
      avatar: "🧑",
    },
    {
      name: "Jane Smith",
      review:
        "Beautiful and functional designs. They really transformed my home into something I could only dream of. The process was smooth, and the team was very professional.",
      rating: 4,
      avatar: "👩",
    },
    {
      name: "Alice Johnson",
      review:
        "Great service and wonderful designs! The eco-friendly materials used were a big plus for me. I’ll definitely be recommending them to friends and family.",
      rating: 5,
      avatar: "👧",
    },
    {
      name: "Robert Brown",
      review:
        "Excellent work on the kitchen renovation. The team was very skilled and delivered on time. The pricing was fair, and the quality was top-notch.",
      rating: 4,
      avatar: "👨",
    },
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="py-16 bg-gray-100" id="reviews">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Customer Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="text-6xl mb-4">{review.avatar}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {review.name}
              </h3>
              <p className="text-gray-600 mb-4">"{review.review}"</p>
              <div className="text-yellow-500">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
