const Footer = () => {
  return (
    <footer className="bg-[#FFF9F0] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#647ACB] mb-4">Sunrise Public School</h3>
            <p className="text-gray-600">
              Nurturing minds, building futures.<br />
              A place where learning meets joy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#647ACB] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#FF7F50] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-600 hover:text-[#FF7F50] transition-colors duration-200">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-[#FF7F50] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#647ACB] mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-600">
              <p>📞 Phone: (123) 456-7890</p>
              <p>✉️ Email: info@sunriseschool.com</p>
              <p>📍 123 Education Street,<br />City, State 12345</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Sunrise Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
