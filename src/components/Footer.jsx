export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
  
          {/* Copyright & License */}
          <p className="text-sm">© {new Date().getFullYear()} StudyGroup. All Rights Reserved.</p>
          <p className="text-xs mt-1">Licensed under MIT License.</p>
        </div>
      </footer>
    );
  }
  