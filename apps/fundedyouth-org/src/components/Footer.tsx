export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                FY
              </div>
              <span className="text-xl font-semibold text-white">Funded Youth</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering the next generation through education, innovation, and community.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">STEM Education</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Fundrasing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Workshops</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Impact</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Funded Youth. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
