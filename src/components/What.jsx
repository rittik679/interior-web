import React from 'react'

const What = () => {

  const services = [
    {
      title: "Interior Design",
      description:
        "We create functional, aesthetic spaces tailored to your style and needs.",
      icon: "🛋️",
    },
    {
      title: "Space Planning",
      description:
        "Efficient space planning services to maximize functionality and beauty.",
      icon: "📐",
    },
    {
      title: "Custom Furniture",
      description:
        "We design and create custom furniture to complement your interiors.",
      icon: "🛏️",
    },
    {
      title: "Lighting Solutions",
      description:
        "Unique lighting designs to brighten up your home and enhance ambiance.",
      icon: "💡",
    },
  ];


  return (
    <section className="py-16 bg-gray-50" id="what-we-do">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default What
