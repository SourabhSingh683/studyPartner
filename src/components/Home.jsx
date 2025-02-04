import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white pt-20 overflow-hidden">
      {/* Subtle Blurry Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-gray-900 to-gray-950 opacity-40 blur-[50px] will-change-transform"></div>

      {/* Hero Section */}
      <motion.h1
        className="text-lg md:text-2xl lg:text-3xl font-bold text-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "tween", ease: "easeOut" }}
      >
       <span className="text-indigo-400">No Partner To Study With ?</span> Find Your Perfect <span className="text-indigo-400">Study Partner</span> Today
      </motion.h1>

      <motion.p
        className="text-gray-300 text-xs md:text-lg text-center mt-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Connect with fellow students, ace your exams, and make learning more enjoyable.
      </motion.p>

      {/* Quick Match Section */}
      <motion.div
        className="mt-10 bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg z-10 backdrop-blur-md w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h2 className="text-md md:text-lg font-semibold text-indigo-300 text-center">Quick Match</h2>
        <p className="text-gray-400 text-center mb-4 text-sm md:text-base">Find a study group instantly!</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-indigo-400 transition-all">
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Computer Science</option>
          </select>

          <select className="p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-indigo-400 transition-all">
            <option>Select Your Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <input
            type="text"
            placeholder="Library Name"
            className="p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-indigo-400 transition-all"
          />

          <input
            type="text"
            placeholder="Your Major"
            className="p-3 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-indigo-400 transition-all"
          />

          <button className="col-span-1 md:col-span-2 bg-indigo-500 hover:bg-indigo-600 p-3 rounded-md text-white transition-all">
            Find Match
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default HomePage;
