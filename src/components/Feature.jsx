import React from 'react'

const Feature = () => {
  const features = [
    {
      title: "Premium Materials",
      description:
        "We use only the highest quality materials to ensure lasting beauty and durability.",
      icon: "🏆",
    },
    {
      title: "Eco-friendly Solutions",
      description:
        "Our designs are sustainable and eco-friendly, minimizing environmental impact.",
      icon: "🌱",
    },
    {
      title: "Timely Delivery",
      description:
        "We respect your time by ensuring every project is completed on schedule.",
      icon: "⏳",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get premium interior services at competitive prices, tailored to your budget.",
      icon: "💰",
    },
  ];

  return (
    <section className="py-16 bg-white" id="features">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};


export default Feature
