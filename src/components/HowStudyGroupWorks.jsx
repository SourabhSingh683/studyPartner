import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your academic interests, study preferences, and schedule availability.",
  },
  {
    step: 2,
    title: "Select Your College",
    description:
      "Choose your college or university to connect with students from your institution.",
  },
  {
    step: 3,
    title: "Select Your Subjects",
    description:
      "Choose from our comprehensive list of subjects and specify your current study goals.",
  },
  {
    step: 4,
    title: "Get Matched",
    description:
      "Our algorithm finds the most compatible study partners based on your criteria and preferences.",
  },
  {
    step: 5,
    title: "Start Studying",
    description:
      "Connect with your study group through our virtual study rooms and start collaborating!",
  },
];

const HowStudyGroupWorks = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        How StudyGroup Works
      </motion.h2>
      <motion.p
        className="text-gray-400 text-center mt-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Five simple steps to find your perfect study partners
      </motion.p>

      <div className="max-w-4xl mx-auto mt-10 relative">
        <div className="border-l-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`flex ${
                step.step % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } items-center`}
              initial={{ opacity: 0, x: step.step % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 p-6">
                <h3 className="text-xl font-bold">{`Step ${step.step}: ${step.title}`}</h3>
                <p className="text-gray-300 mt-2">{step.description}</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <motion.div
                  className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {step.step}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowStudyGroupWorks;
