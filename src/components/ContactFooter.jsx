import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 px-6">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-gray-400 mt-2">
            Have questions? We're here to help you find your perfect study group.
          </p>
          <div className="mt-6">
            <p className="text-blue-400">Email</p>
            <p className="text-gray-300">support@studygroup.com</p>
          </div>
          <div className="mt-4">
            <p className="text-blue-400">Social Media</p>
            <p className="text-gray-300">Twitter | Facebook | Instagram</p>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg">
          <form>
            <input type="text" placeholder="Your Name" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-md" />
            <select className="w-full p-3 mb-3 bg-gray-700 text-white rounded-md">
              <option>Select a subject</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
            </select>
            <textarea placeholder="Your Message" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-md h-32"></textarea>
            <button className="w-full bg-blue-500 py-3 rounded-md font-semibold hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; 2024 StudyGroup. All rights reserved.</p>
        <p>Made with ❤️ for students worldwide</p>
      </div>
    </div>
  );
};

export default Contact;
