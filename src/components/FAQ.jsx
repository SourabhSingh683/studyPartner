import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "How do I find study partners?", answer: "You can find study partners by creating a profile and selecting subjects that interest you. Our algorithm matches you with compatible partners." },
  { question: "Is StudyGroup free to use?", answer: "Yes, StudyGroup is completely free for students." },
  { question: "How do virtual study rooms work?", answer: "Virtual study rooms allow you to chat, video call, and share resources with your group." },
  { question: "How is my privacy protected?", answer: "We only connect you with verified students from your institution to ensure privacy and safety." },
  { question: "Can I create multiple study groups?", answer: "Yes, you can join multiple groups for different subjects and collaborate effectively." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <p className="text-gray-400 mt-2">Get answers to common questions about StudyGroup</p>

      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-4 px-6 bg-gray-800 shadow-md hover:bg-gray-700 flex justify-between items-center transition duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 bg-gray-800 text-gray-300"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-400">
        Still have questions?{" "}
        <a href="#" className="text-blue-400 underline hover:text-blue-300 transition">
          Contact our support team
        </a>
      </p>
    </div>
  );
};

export default FAQ;
