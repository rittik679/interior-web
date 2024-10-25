import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to server)
    console.log("Appointment Form Data:", formData);
    alert("Appointment request submitted!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-gray-100" id="appointment">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Schedule an Appointment
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="date"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200"
                placeholder="Tell us more about your project"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 ease-in-out"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
