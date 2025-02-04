const features = [
  { title: "Smart Matching", description: "Find study partners based on subject, skill level, and study goals for the perfect match." },
  { title: "Flexible Scheduling", description: "Coordinate study sessions easily with built-in scheduling tools and calendar integration." },
  { title: "Verified Profiles", description: "Connect with verified students from your institution for safe and reliable study partnerships." },
  { title: "Virtual Study Rooms", description: "Access virtual study spaces with video chat, whiteboard, and document sharing features." },
  { title: "Resource Sharing", description: "Share and access study materials, notes, and resources within your study group." },
  { title: "Progress Tracking", description: "Monitor your study progress and achievements with detailed analytics and insights." },
];

export default function WhyChooseStudyGroup() {
  return (
    <div className="relative py-20 min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Blurry Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 opacity-40 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-gray-800 opacity-50 backdrop-blur-xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          Why Choose <span className="text-indigo-400">StudyGroup?</span>
        </h2>

        <p className="text-gray-400 mt-2">
          Discover how we make group study more effective and enjoyable.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-6 rounded-lg shadow-md backdrop-blur-lg border border-indigo-400/20"
            >
              <h3 className="text-xl font-semibold text-indigo-300">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
