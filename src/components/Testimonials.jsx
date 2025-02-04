import React, { useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Computer Science Major",
    review:
      "Finding study partners for my programming projects was always a challenge. StudyGroup helped me connect with peers who share my passion for coding. We've completed several projects together and improved our skills significantly.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Mathematics Student",
    review:
      "StudyGroup has been an amazing platform! I found study partners who helped me understand complex topics. The scheduling feature is super helpful too.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
      <p className="text-gray-400 text-center mt-2">
        Success stories from our study group community
      </p>
      <div className="max-w-3xl mx-auto mt-8 px-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="font-semibold">{testimonials[activeIndex].name}</h3>
          <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
          <p className="mt-4">{testimonials[activeIndex].review}</p>
          <div className="mt-3 text-yellow-400">
            {"★".repeat(testimonials[activeIndex].rating)}
            {"☆".repeat(5 - testimonials[activeIndex].rating)}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
